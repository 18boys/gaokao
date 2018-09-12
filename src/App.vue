<template>
  <div>
    <div id="app">
      <!--<img src="./img/home.jpg">-->
      <router-view />

    </div>
    <div class="music-bg music-bg-open" @click="onClick" v-if="isPlay"></div>
    <div class="music-bg music-bg-close" @click="onClick" v-if="!isPlay"></div>
    <audio id="video-bg" src="/dict/market/wdgkt/static/voice/bgm.mp3" loop autoplay></audio>
  </div>

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isPlay: true,
      };
    },
    methods: {
      onClick() {
        this.isPlay = !this.isPlay;
        if (this.isPlay) {
          $("#video-bg")[0].play();
        } else {
          $("#video-bg")[0].pause();
        }
      }
    },
    mounted() {

      function change() {
        var screenWidth = document.body.clientWidth,
          screenHeight = document.body.clientHeight,
          originWidth = 375,
          originHeight = 604;
        $('#app').css({
          '-webkit-transform': 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')',
          transform: 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')'
        });
      }

      $(() => {
        $("#video-bg")[0].play();
        document.addEventListener("WeixinJSBridgeReady", function () {
          $("#video-bg")[0].play();
        });
        change();
        window.addEventListener("resize", function () {
          change();
        }, false);

      })

      window.alert = function (name) {
        var iframe = document.createElement("IFRAME");
        iframe.style.display = "none";
        iframe.setAttribute("src", 'data:text/plain,');
        document.documentElement.appendChild(iframe);
        window.frames[0].window.alert(name);
        iframe.parentNode.removeChild(iframe);
      }

    }
  }
</script>

<style>
  .music-bg {
    position: absolute;
    right: 0.1rem;
    top: 0.2rem;
    width: 0.5rem;
    height: 0.5rem;
  }

  .music-bg-open {
    background: url("../static/img/music-open.png") no-repeat;
    background-size: cover;
    animation: rotate 2s linear infinite;
  }

  .music-bg-close {
    background: url("../static/img/music-close.png") no-repeat;
    background-size: cover;
  }

  @keyframes rotate {
    from {
      -webkit-transform: rotatez(0);
    }
    to {
      -webkit-transform: rotatez(360deg);
    }
  }
</style>
