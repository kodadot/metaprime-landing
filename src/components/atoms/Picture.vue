<template>
    <picture>
      <source
        v-if="imageMobile"
        :srcset="imageMobile"
        media="(max-width: 767px)"
      >
      <source
        v-if="imageTablet"
        :srcset="imageTablet"
        media="(min-width: 768px) and (max-width: 1279px)"
      >
      <source
        :srcset="imageDesktop"
        media="(min-width: 1280px)"
      >
      <img
        :src="imageDesktop"
        :alt="alt"
        :loading="lazy ? 'lazy' : undefined"
        :class="imgClasses"
      />
    </picture>
</template>

<script>
export default {
  props: {
    imageMobile: {
      type: String,
      default: ''
    },
    imageTablet: {
      type: String,
      default: ''
    },
    imageDesktop: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      default: true
    },
    imgClasses: {
      type: String,
      default: ''
    }
  }
}
</script>
