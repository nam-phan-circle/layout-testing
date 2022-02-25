<template>
  <div ref="top" class="page-layout">
    <page-header />
    <Nuxt />
    <page-footer />
    <div class="scroll-top" @click="scrollToTop()">
      <img src="~/static/images/pagetop.png" alt="phone" class="page-top">
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/pages/header.vue'
import PageFooter from '../components/pages/footer.vue'
export default {
  components: {
    PageHeader,
    PageFooter
  },
  methods: {
    scrollToTop () {
      const el = this.$refs.top;
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-layout {
  position: relative;
  .scroll-top {
    position:fixed;
    bottom: 150px;
    right: 50px;
    cursor: pointer;
    img {
      width: 48px;
    }
  }
}

</style>
