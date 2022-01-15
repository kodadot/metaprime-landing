<template>
  <picture>
    <source
      v-if="imageMobile"
      :srcset="imageMobile"
      media="(max-width: 479px)"
      type='image/webp'
    >
    <source
      v-if="imageTablet"
      :srcset="imageTablet"
      media="(min-width: 480px) and (max-width: 1279px)"
      type='image/webp'
    >
    <source
      :srcset="imageDesktop"
      media="(min-width: 1280px)"
      type='image/webp'
    >
    <img
      :src="imageDefault"
      :alt="alt"
      :loading="lazy ? 'lazy' : undefined"
      :class="imgClass"
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
      default: ''
    },
    imageDefault: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      default: true
    },
    imgClass: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>
