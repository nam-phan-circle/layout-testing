<template>
  <div class="base-input">
    <ValidationProvider
      v-slot="{ errors }"
      :vid="label"
      :name="label"
      :rules="rules"
    >
      <div class="base-input__wrap">
        <textarea v-if="textarea" :value="value" :name="name" :rows="rows" :placeholder="placeholder" @input="inputChange" />
        <input v-else :type="inputType" :value="value" :name="name" :placeholder="placeholder" @input="inputChange">
        <span
          v-if="password"
          :class="`icon icon-hide icon-eyes-${showPassword ? 'hide' : 'show'}`"
          @click="showPassword = !showPassword"
        />
      </div>
      <em v-if="errors && errors.length > 0" class="error-message">
        {{ errors[0] }}
      </em>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider
  },

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: true
    },
    rules: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    error: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    textarea: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: "3"
    }
  },

  data () {
    return {
      showPassword: false
    }
  },
  computed: {
    inputType () {
      if (this.password && this.showPassword) {
        return 'text'
      } else if (this.password && !this.showPassword) {
        return 'password'
      }
      return this.type
    }
  },
  methods: {
    inputChange ($event) {
      this.$emit('input', $event?.target?.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {
  &__wrap {
    width: 100%;
    position: relative;
  }
  input {
    height: 48px;
  }
  input, textarea {
    width: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    background: #eeeeee;
    border: none;
    padding: 0 1rem;
    &:active,
    &:focus {
      outline: none;  
      border: 1px solid #d3caca;
    }
  }
  .icon {
    position: absolute;
    font-size: 32px;
    z-index: 2;
    top: 0;
    right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    &::before {
      color: #9AA2AC;
    }
  }
  .error-message {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #c9504d;
    margin-left: 14px;
  }
}
</style>
