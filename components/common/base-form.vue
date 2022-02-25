<template>
  <div class="base-form">
    <ValidationObserver v-slot="{ invalid }" ref="observer">
      <form
        :disabled="disabled"
        :readonly="readonly"
        class="base-form__form"
        @submit.prevent="submit"
      >
        <slot />
        <div class="base-form__action pt-2">
          <slot name="action" :disable="invalid" />
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
export default {
  components: {
    ValidationObserver
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate()
      return !!isValid
    }
  }
}
</script>

<style lang="scss" scoped>
.base-form {
  width: 100%;
  &__action {
    text-align: center;
  }
}
</style>
