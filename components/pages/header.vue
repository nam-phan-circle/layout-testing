<template>
  <div class="page-header">
    <div class="header-wrap">
      <div class="header-logo">
        <img src="~/static/images/logo_illust.png" alt="tel" class="about-icon">
      </div>
      <div class="header-content">
        <div class="menu-list">
          <div
            v-for="(item, index) in items"
            :key="index" :class="`menu-item ${item.class}`"
          >
            <div v-if="item.logo" class="item-wrap logo-wrap">
              <img
                :src="require(`~/static/images/${item.img}`)"
                alt="tel"
                class="menu-icon logo"
              >
              <p class="item-sub-name item-logo">{{ item.nameEng }}</p>
            </div>
            <div v-else class="item-wrap">
              <img
                :src="require(`~/static/images/${item.img}`)"
                alt="tel"
                class="menu-icon"
              >
              <p class="item-name">{{ item.name }}</p>
              <p class="item-sub-name">{{ item.nameEng }}</p>
            </div>
          </div>
        </div>
        <div class="btn-menu" @click="showModal()">
          <img
            src="~/static/images/icons-menu.svg"
            alt="tel"
            class="menu-icon"
          >
          <p class="name">MENU</p>
        </div>
      </div>
    </div>
    <div v-show="show" class="menu-mobile-popup">
      <div v-click-outside="handleClickOutSide" class="menu-wrap">
        <div
          class="btn-close"
          @click="hideModal()"
        >
          <img src="~/static/images/icons-close.svg" alt="close" class="icon-close">
        </div>
        <div class="menu-content">
          <template v-for="(item, index) in items">
            <div v-if="!item.logo" :key="index" :class="`menu-item ${item.class}`">
              <div class="item-wrap">
                <img
                  :src="require(`~/static/images/${item.img}`)"
                  alt="tel"
                  class="menu-icon"
                >
                <p class="item-name">{{ item.name }}</p>
                <p class="item-sub-name">{{ item.nameEng }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
        // here I check that click was outside the el and his childrens
        if (!(
          el == event.target && el.contains(event.target)) &&
           event.target.className === "menu-mobile-popup"
          ) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
        }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});

export default {
  data () {
    return {
      show: false,
      items: [
        {
          name: "園について",
          nameEng: "ABOUT",
          img: "menu_illust01.png",
          class: "",
          logo: false
        },
        {
          name: "園の特色",
          nameEng: "FEATURE",
          img: "menu_illust02.png",
          class: "",
          logo: false
        },
        {
          name: "園の生活",
          nameEng: "CHILDCARE",
          img: "menu_illust03.png",
          class: "",
          logo: false
        },
        {
          name: "自然にタッチ",
          nameEng: "TOUCH",
          img: "menu_illust03.png",
          class: "is-mobile",
          logo: false
        },
        {
          name: "",
          nameEng: "MOGUSHIUMINO KODOMOEN",
          img: "logo2019.png",
          class: "item-logo",
          logo:   true
        },
        {
          name: "牛深町のこと",
          nameEng: "ABOUT Ushifuka-cho",
          img: "menu_illust03.png",
          class: "is-mobile",
          logo: false
        },
        {
          name: "入園案内",
          nameEng: "INFORMATION",
          img: "menu_illust04.png",
          class: "",
          logo: false
        },
        {
          name: "お問い合わせ",
          nameEng: "CONTACT",
          img: "menu_illust05.png",
          class: "",
          logo: false
        },
        {
          name: "アクセス",
          nameEng: "ACCESS",
          img: "menu_illust06.png",
          class: "",
          logo: false
        },
      ]
    }
  },
  methods: {
    handleClickOutSide () {
      if (this.show) {
        this.hideModal()
      }
    },
    showModal() {
      this.show = true
      document.body.classList.add("modal-open");
    },
    hideModal() {
      this.show = false;
      document.body.classList.remove("modal-open");
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  position: relative;
  background: #ffffff;
  overflow-x: hidden;

  &::before {
    content: '';
    width: 330px;
    height: 110px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('static/images/header_bird01.png'),
                      url('static/images/header_bird02.png'),
                      url('static/images/header_bird03.png');
    background-repeat: no-repeat,
                      no-repeat,
                      no-repeat;
    background-position: left 35px top 40px,
                        left 100px top 70px,
                        left 275px top 20px;
    background-size: 50px;
    animation:birdsFly 10s linear infinite;
  }
  .header-wrap {
    text-align: center;
    padding-top: 40px;
    background: transparent url('static/images/header_top_bg.png') no-repeat top center;
    background-size: 100%;
    .header-logo {
      background: transparent url('static/images/header_illust_bg.png') no-repeat center center;
      img {
        max-width: 200px;
      }
    }
    .menu-list {
      display: flex;
      justify-content: center;
      align-items: center;
      .menu-item {
        padding: 16px 16px 0;
        position: relative;
        cursor: pointer;
        z-index: 5;
        &:hover {
          .menu-icon {
            transform: scale(1.2);
            transition: 0.3s;
            &.logo {
              transform: scale(1.1);
            }
          }
          .item-name {
            color: #0f6eb8;
          }
        }
        &::before {
          content: '';
          width: 100%;
          height: 60%;
          border-left: 1px dotted #dcdcdc;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        &:last-child {
          &::before {
            border-right: 1px dotted #dcdcdc;
          }
        }
        &.item-logo {
          align-self: flex-end;
        }
        &.is-mobile {
          display: none;
        }
        .item-name {
          margin: 0;
        }
        .menu-icon {
          width: 48px;
          height: 48px;
          object-fit: contain;
          &.logo {
            width: 200px;
            height: auto;
          }
        }
        .item-sub-name {
          font-size: 12px;
          color: #f2a9a8;
          &.item-logo {
            color: #0f6eb8;
          }
        }
      }
    }
    .btn-menu {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .header-wrap {
      .btn-menu {
        display: block;
        padding-top: 36px;
        color: #0f6eb8;
        z-index: 5;
        .menu-icon {
          width: 36px;
        }
      }
      .menu-list {
        justify-content: flex-start;
        width: 80vw;
        overflow: hidden;
        .menu-item {
          min-width: 80px;
          &.is-mobile {
            display: block;
          }
          &.item-logo {
            display: none;
          }
          .item-name {
            font-size: 13px;
          }
          .item-sub-name {
            margin: 0;
          }
        }
      }
      .header-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    .menu-mobile-popup {
      position: fixed;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      z-index: 9;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .menu-wrap {
        position: relative;
        width: 100%;
        height: fit-content;
        background: #ffffff;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
      }
      .menu-content {
        padding: 32px 16px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 1em;
        .menu-item {
        width: 100px;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        box-shadow: 2px 2px 2px #e6cdcd;
        background: #f6f6f6;
        gap: 16px;
        &:hover {
          background: #ffe9e9;
        }
        img {
          width: 48px;
          height: 48px;
          -o-object-fit: contain;
          object-fit: contain;
        }
        p {
          margin: 0;
        }
        .item-sub-name {
          margin-top: 8px;
          font-size: 12px;
          color: #f2a9a8;
        }
      }
      }
      .btn-close {
        width: 48px;
        position: absolute;
        right: 6px;
        top: -24px;
        .icon-close {
          width: 100%;
        }
      }
      
    }
  }
}
</style>
