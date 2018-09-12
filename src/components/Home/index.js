export default {
  data() {
    return {
      img: '',
      isShow: false,
    };
  },
  methods: {
    async onclickSave() {
    },
    onClickHide() {
      this.isShow = false;
    },
    onclickNoticeButton() {
      this.$router.push('select');
    },
  },
  mounted() {
    // 开启文字滚动
    $(() => {
      $('.home-text').addClass('word-in-an');
      setTimeout(() => {
        $('.notice-button').addClass('show');
      }, 5000)
    })

  }
};
