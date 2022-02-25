<template>
  <div class="home-page">
    <banner-section @scroll-to="handleScroll()" />
    <about-section ref="contact" />
    <inquiry-form />
  </div>
</template>

<script>
import BannerSection from '../components/pages/home/banner-section.vue'
import AboutSection from '../components/pages/home/about-section.vue'
import InquiryForm from '../components/pages/home/inquiry-form.vue'
export default {
  components: {
    BannerSection,
    AboutSection,
    InquiryForm
  },

  methods: {
    handleScroll () {
      this.$refs.contact.scrollToContactUs();
    }
  }
}
</script>
