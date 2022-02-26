<template>
  <div class="inquiry-form">
    <div class="inquiry-form__head">
      <img src="~/static/images/form_icon.png" alt="form_icon" class="form-icon">
      <h2 class="title">お問い合わせフォーム</h2>
      <p class="text">form</p>
    </div>
    <div class="inquiry-form-wrap">
      <div class="inquiry-form__content">
        <p class="description">
          送信完了後受領完了の自動送信メールをお送りしております。<br />
          その後当園担当者より2~3営業日以内にメールでご連絡させていただきます、<br />
          万が一ご連絡がない場合はお手数ですが、当園までご連絡ください。<br />
        </p>
        <div class="form-wrap">
          <base-form ref="form">
            <div class="input-group">
              <!-- name -->
              <div class="input-wrap">
                <div class="label">
                  お名前<span class="tag">必須</span>
                </div>
                <base-input
                  v-model="form.name"
                  name="お名前"
                  rules="required"
                />
              </div>
              <!-- tel -->
              <div class="input-wrap">
                <div class="label">
                  お電話番号<span class="tag">必須</span>
                </div>
                <base-input
                  v-model="form.tel"
                  name="お電話番号"
                  rules="required|tel"
                />
              </div>
              <!-- address -->
              <div class="input-wrap">
                <div class="label">
                  ご住所<span class="tag">必須</span>
                </div>
                <base-input
                  v-model="form.address"
                  name="ご住所"
                  rules="required"
                />
              </div>
              <!-- email -->
              <div class="input-wrap">
                <div class="label">
                  メールアドレス<span class="tag">必須</span>
                </div>
                <base-input
                  v-model="form.email"
                  name="メールアドレス"
                  rules="required|email"
                />
              </div>
              <!-- contact details -->
              <div class="input-wrap">
                <div class="label">
                  お問い合わせ内容<span class="tag">必須</span>
                </div>
                <base-input
                  v-model="form.contact"
                  textarea
                  rows="10"
                  name="メールアドレス"
                  rules="required"
                />
              </div>
            </div>
            <base-button
              class="base-button btn-submit btn-primary"
              @click="submit()"
            >
              確認
              <img src="~/static/images/btn_ar_af.png" alt="btn_link_ar" class="icon-ar">
            </base-button>
          </base-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseForm from '~/components/common/base-form.vue'
import BaseInput from '~/components/common/base-input.vue'
import BaseButton from '~/components/common/base-button.vue'

export default {
  components: {
    BaseForm,
    BaseInput,
    BaseButton
  },
  data () {
    return {
      form: {
        name: "",
        tel: "",
        address: "",
        email: "",
        contact: ""
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.submit()
      // TODO Handle send email
    }
  }
}
</script>

<style lang="scss" scoped>
.inquiry-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  &-wrap {
    width: 100%;
    margin: 0 auto;
    background: #ffffff url('static/images/contents_bg.png') no-repeat bottom center;
    background-size: cover;
  }

  &__head {
    text-align: center;
    width: 100%;
    background: transparent url('static/images/form_illust.png') no-repeat bottom center;
    @media only screen and (min-width: 1440px) {
      background-repeat: repeat-x;
    }
    img {
      max-width: 56px;
    }
    .title {
      font-size: 18px;
      color: #333333;
      line-height: 28px;
      font-weight: 700;
    }
    .text {
      font-size: 16px;
      line-height: 23px;
      color: #0f6eb8;
      text-transform: uppercase;
    }
  }

  &__content {
    .description {
      font-size: 16px;
      line-height: 23px;
      font-weight: 400;
      color: #848484;
      text-align: center;
      margin-bottom: 32px;
      padding: 0 16px;
    }
    .input-group {
      border: 2px solid #0f6eb8;
      border-radius: 8px;
      position: relative;
      background: #ffffff;
      max-width: 700px;
      width: 100%;
      margin: 0 auto;
    }
    .input-wrap {
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #eeeeee;
      &:last-child {
        border: none;
      }
      .tag {
        padding: 0 6px;
        margin-left: 8px;
        border-radius: 16px;
        background: #f2a9a8;
      }
      .label {
        width: 200px;
        padding-left: 8px;
        align-self: stretch;
        background: #0f6eb8;
        display: flex;
        align-items: center;
      }
      .base-input {
        margin: 16px;
        flex: 1;
      }
    }
    .base-button {
      &.btn-submit {
        max-width: 160px;
        margin: 20px auto;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    &-wrap {
      background: #ffffff;
    }
    &__content {
      .input-wrap {
        .label {
          width: 150px;
          flex-flow: column;
          align-items: flex-start;
          justify-content: center;
          span {
            margin: 0;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    &__content {
      .input-group {
        border: none
      }
      .input-wrap {
        border-bottom: none;
        border-top: 1px solid #eeeeee;
        &:last-child {
          border-top: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
        }
      }
    }
  }
}
</style>
