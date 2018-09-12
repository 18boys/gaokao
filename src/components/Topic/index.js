import { downloadImage, previewImage, chooseImage, uploadImage, getLocalImgData } from '@utils/ydk';
import { filterWord } from './config'
import html2canvas from 'html2canvas';

export default {
  data() {
    return {
      img: '',
      userName: '',
      imgUrl: '',
      commentUrl: '',
      imgStyle: {},

      loading: true,
    };
  },
  methods: {
    onGoto() {
      location.href = 'https://ke.youdao.com/wap/?outVendor=wdgkt_gwfw_0605&v=' + new Date().getTime();
    }
  },
  mounted: async function () {
    const { imgUrl, userName, commentUrl } = this.$route.query;
    this.imgUrl = imgUrl;
    this.commentUrl = commentUrl;
    this.imgStyle = {
      background: `url(${imgUrl})`,
      'background-size': 'cover',
      'background-position': '0  -0.64rem',
    };
    let name = userName;
    // 处理敏感词
    filterWord.forEach((word) => {
      name = name.replace(word, '**');
    });
    this.userName = name;
    // const canvas = await drawCanvas('#target');
    const canvas = await html2canvas(document.querySelector('#target'));
    this.img = await canvas.toDataURL("image/jpeg", 1.0);//转成base64
    this.loading = false;
  }
};
