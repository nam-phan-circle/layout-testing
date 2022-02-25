<template>
    <div class="about-section">
      <div class="container">
        <h1 class="title">
          当園についてのお問い合わせなど<br/>
          お気軽にご相談ください
        </h1>
        <div class="top-about">
          <div
            v-for="(item, index) in topAbouts"
            :key="index"
            class="about-item"
          >
            <div class="img-wrap">
              <img
              :src="require(`~/static/images/${item.img}`)"
              :alt="item.title"
              class="about-icon"
            >
            </div>
            <p class="title">{{ item.title}}</p>
            <p class="description">{{ item.description}}</p>
          </div>
        </div>
        <div class="center-about">
          <p class="text">
            もぐし海のこども園のホームページをご覧いただきありがとうございます。<br />
            ご意見・ご質問等ございましたら、下記のお問い合わせ方法よりお問い合わせください。<br />
            どんな生細なことでも喜んでお答えいたしますので、お気軽にお問い合わせください。<br />
          </p>
          <base-button class="base-button btn-faq btn-primary">
            よくある質問はこちら
            <img src="~/static/images/btn_ar_af.png" alt="btn_ar_af" class="icon-ar">
          </base-button>
        </div>
        <div ref="contactUs" class="bottom-about">
          <div class="about-item">
            <img src="~/static/images/box02-1_icon.png" alt="tel" class="about-icon">
            <p class="title">お電話でのお問い合わせ</p>
            <a href="tel:0969722772" class="tel">0969-72-2772</a>
            <p class="description">受付時間 / 月~金 8:00~19:00</p>
          </div>
          <div class="about-item">
            <img src="~/static/images/box02-2_icon.png" alt="fax" class="about-icon">
            <p class="title">FAXでのお問い合わせ</p>
            <a href="tel:0969722792" class="fax">0969-72-2792</a>
            <p class="description">受付時間 / 月~金 8:00~19:00</p>
          </div>
          <div class="about-item">
            <img src="~/static/images/box02-3_icon.png" alt="email" class="about-icon">
            <p class="title">メールでのお問い合わ</p>
            <base-button class="base-button btn-faq" outlined>
            メールフォームへ
            <img src="~/static/images/box3_link_ar.png" alt="btn_link_ar" class="icon-ar">
          </base-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BaseButton from '~/components/common/base-button.vue'
export default {
  components: {
    BaseButton
  },
  data () {
    return {
      topAbouts: [
        {
          img: 'box01-1_icon.png',
          title: '入国に関して',
          description: '入園に関してご不明な点やご相談などございましたら、お気軽にお問い合わせください。'
        },
        {
          img: 'box01-2_icon.png',
          title: '園の見学について',
          description: '見学希望は随時お受けしています。ご予約は、お電話かメールでお申し込みください。'
        },
        {
          img: 'box01-3_icon.png',
          title: '苦情申し出',
          description: '当園についての苦情やご意見などございましたら、下記フォームよりお申し出ください。'
        },
      ]
    }
  },
  methods: {
    scrollToContactUs () {
      const el = this.$refs.contactUs;

      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about-section {
  background: transparent url('static/images/contents_bg.png') no-repeat bottom center;
  padding-bottom: 100px;
  position: relative;
  &::before {
    content:'';
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    left: 16%;
    background: transparent url('static/images/con_illust_lkumo.png') no-repeat top center;
    background-size: contain;
    z-index: -1;
  }
  &::after {
    content:'';
    position: absolute;
    width: 300px;
    height: 300px;
    top: 5%;
    left: -5%;
    background: transparent url('static/images/con_illust_lkumo.png') no-repeat top center;
    background-size: contain;
    z-index: -1;
  }
  .container {
    text-align: center;
    margin: 0 auto;
    max-width: 1200px;
  }
  .title {
    color: #353535;
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    padding: 16px;
  }
  .top-about {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 8px;
  }
  .bottom-about {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    border-radius: 8px;
    .about-item {
      .about-icon {
        width: 48px;
        height: 48px;
      }
      a {
        text-decoration: none;
        font-size: 32px;
        &.tel {
          color: #f2a9a8;
        }
        &.fax {
          color: #80c6ee;
        }
      }
      .base-button {
        &.btn-faq {
          color: #0f6eb8;
          border: 2px solid #0f6eb8;
          font-weight: 700;
        }
        img {
          margin-left: 8px;
        }
      }
    }
  }
  .about-item {
      margin: 40px 0;
      padding: 0 40px;
      border-right: 1px dotted #f6f6f6;
      flex-basis: 33%;
      &:last-child {
        border: none;
      }
      .img-wrap {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }
      .about-icon {
        width: 100px;
      }
      .title {
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        color: #353535;
        padding: 0;
      }
      .description {
        font-size: 16px;
        font-weight: 400;
        color: #515151;
        text-align: center;
      }
    }
  .center-about {
    margin: 64px 0;
    .text {
      color: #515151;
      margin-bottom: 48px;
    }
    .base-button {
      color: #ffffff;
      max-width: 240px;
      margin: 0 auto;
      img {
        margin-left: 8px;
      }
    }
  }
  
  @media only screen and (max-width: 768px) {
    .container {
      margin: 16px;
    }
    .top-about, .bottom-about {
      flex-flow: column;
    }
    .title {
      font-size: clamp(16px, 4.9vw, 32px);
    }
    &::before {
      left: 60%;
      transform: translateX(-50%);
    }
    &::after {
      top: 3%;
      width: 150px;
      height: 150px;
      left: 16%;
      transform: translateX(-50%);
    }
    .about-item {
      border-right: none;
      border-bottom: 1px solid #f6f6f6;
      margin: 0;
      padding: 40px;
    }
   }
}
</style>
