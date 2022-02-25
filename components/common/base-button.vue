<template>
	<div
    @click="handleClick()"
    :class="['base-button', {'outlined': outlined, 'disabled': disabled}]"
    >
		<button class="base-button__btn"><slot /></button>
	</div>
</template>

<script>
export default {
	props: {
		outlined: {
			type: Boolean,
			default: false
		},
    disabled: {
			type: Boolean,
			default: false
		},
	},
  methods: {
    handleClick () {
      if (this.disabled) return
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
	.base-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 0 16px;
    min-width: 64px;
    border-radius: 48px;
    cursor: pointer;
   &.outlined {
     border: 1px solid #000000;
     &:hover {
       background: #f6f6f6;
       transition: 0.3s;
     }
   }
   &.disabled {
     cursor: not-allowed;
   }
   &__btn {
     outline: none;
     border: none;
     background: transparent;
     cursor: pointer;
     color: inherit;
     font-weight: inherit;
   }
   &.btn-primary {
     color: #ffffff;
     background: #f2a9a8;
     &:hover {
       background: #e28d8c;
       transition: 0.3s;
     }
     .base-button__btn {
       color: #ffffff;
     }
   }
  }
</style>
