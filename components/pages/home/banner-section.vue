<template>
  <div class="banner-section">
    <div class="img-wrap">
      <img src="~/static/images/banner.jpeg" alt="banner" class="icon-ar">
    </div>
    <div class="btn-contact" @click="handleScroll()">
      <p class="title">お問い合わせ</p>
      <p class="sub-title">CONTACT</p>
    </div>
    <div class="main-illust">
      <div class="main-illust-wrap">
        <img src="~/static/images/main_illust.png" alt="main_illust">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      this.$emit("scroll-to")
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-section {
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -0;
    left: -0;
    background: transparent url('static/images/menu_u_nami.png') repeat-x left top;
  }
  
  .img-wrap, .main-illust {
    img {
      width: 100%;
    }
  }
  .img-wrap {
    &::before {
      content: "";
      width: 120px;
      height: 120px;
      position: absolute;
      top: -55px;
      left: -41px;
      background: transparent url('static/images/top_lkumo.png') no-repeat left center;
      background-size: contain;
      z-index: 2;
    }
    &::after {
      content: "";
      width: 200px;
      height: 200px;
      position: absolute;
      top: -80px;
      right: 40px;
      background: transparent url('static/images/top_rkumo.png') no-repeat left center;
      background-size: contain;
    }
  }
  .btn-contact {
    position: absolute;
    padding: 16px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: transparent url('static/images/main_title_bg.png') no-repeat center center;
    background-size: contain;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    &::before {
      content: '';
      width: 32px;
      height: 56px;
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      background: transparent url('static/images/hasei_title_icon.png') no-repeat center center;
      background-size: contain;
    }
    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      margin: 0;
    }
    .sub-title {
      font-size: 10px;
      font-weight: 400;
      margin-top: 0;
    }
  }
  .main-illust {
    position: absolute;
    width: 100%;
    bottom: -3px;
    left: 0;
    &::before {
      content: "";
      width: 150px;
      height: 150px;
      position: absolute;
      bottom: -31px;
      left: 0px;
      background: transparent url('static/images/top_about_lgrn.png') no-repeat left center;
      background-size: contain;
      z-index: 2;
    }
    &::after {
      content: "";
      width: 120px;
      height: 120px;
      position: absolute;
      bottom: -20px;
      right: 20px;
      background: transparent url('static/images/top_about_rgrn.png') no-repeat left center;
      background-size: contain;
    }
    &-wrap {
      position: relative;
      &::before {
        content: '';
        width: 150px;
        height: 100px;
        background: transparent url('static/images/main_illust_icon.png') no-repeat top center;
        background-size: contain;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .img-wrap {
      &::before, &::after {
        display: none;
      }
    }
    .main-illust {
      &::before {
        width: clamp(70px, 16.908vw, 100px);
        height: clamp(70px, 16.908vw, 100px);
      }
       &::after {
        width: clamp(50px, 12.077vw, 80px);
        height: clamp(50px, 12.077vw, 80px);
      }
      &-wrap {
        &::before {
          width: 90px;
          height: 70%;
        }
      }
    }
  }
}
</style>
