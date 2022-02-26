<template>
  <div class="page-footer">
    <div class="page-footer__content">
      <div class="img-wrap">
        <img src="~/static/images/logo_illust.png" alt="logo_illust" class="logo-illust">
      </div>
      <div class="content-wrap">
        <p class="title">もぐし<br class="title-br"/>海。こども園<br><span>MOGUSHIUMINO KODOMOEN</span></p>
        <p class="contact-us">お問い合わせ・お申し込み</p>
        <p class="tel">
          <img src="~/static/images/footer_tell_icon.png" alt="phone" class="icon-phone">
          <a href="tel:0969722772">0969-72-2772</a>
        </p>
        <p class="address">千863-1901 熊本県天草市牛深町1212-2</p>
        <base-button
          class="base-button btn-map"
          outlined
          @click="openGoogleMap()"
        >
          Google map
        </base-button>
      </div>
    </div>
    <div class="copyright">
      <p>© MOGUSHI UMINO KODOMOEN ALL RIGHTS RESERVED.</p>
    </div>
  </div>
</template>

<script>
import BaseButton from '../common/base-button.vue'
export default {
  components: {
    BaseButton
  },
  methods: {
    openGoogleMap () {
      const url = "https://www.google.com/maps/place/Msc+Da+Nang/@16.069881,108.2224583,17z/data=!3m1!4b1!4m5!3m4!1s0x31421831f3ba9267:0xba95dca6c025f3a5!8m2!3d16.0698485!4d108.2249108?hl=vi"
      window.open(url, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  &__content {
    .img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff url('static/images/footer_nami.png') no-repeat center bottom;
    }
    .content-wrap {
      margin-top: -10px;
      padding: 20px 0;
      width: 100%;
      background: #eeeeee url('static/images/footer_illust_bg2.png') no-repeat center bottom;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
    }
    @media only screen and (min-width: 1440px) {
      .img-wrap {
        background-repeat: repeat-x;
      }
    }
    .logo-illust {
      max-width: 180px;
    }
    .title {
      font-size: 24px;
      text-align: center;
      color: #0f6eb8;
      font-weight: 700;
      @media only screen and (max-width: 768px) {
      &-br {
        display: none;
      }
    }
      span {
        font-size: 13px;
        font-weight: 400;
      }
    }
    .contact-us {
      margin: 32px 0;
      height: 56px;
      padding: 0 68px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0f6eb8;
      border: 2px solid #0f6eb8;
      border-radius: 56px;
    }
    .tel {
      margin-bottom: 32px;
      font-size: 24px;
      color: #333333;
      display: flex;
      .icon-phone {
        width: 20px;
        object-fit: contain;
      }
      a {
        padding-left: 8px;
        color: #333333;
        text-decoration: none;
      }
    }
    .address {
      margin-bottom: 16px;
      color: #414141;
    }
  }
  .base-button {
    &.btn-map {
      height: 36px;
      max-width: 240px;
      border-radius: 54px;
    }
  }
  .copyright {
    padding-top: 15px;
    text-align: center;
    font-weight: 700;
    color: #fefefe;
    position: relative;
    background: #80c6ee;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: -15px;
      left: 0;
      background: transparent url('static/images/footer_t_nami.png') repeat-x center top;
      background-position-x: -35px;
    }
    p {
      padding: 10px;
      position: relative;
      background: #0d6fb8;
      margin-bottom: 0;
      &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: -15px;
      left: 0;
      background: transparent url('static/images/footer_u_nami.png') repeat-x center top;
    }
    }
  }
}
</style>
