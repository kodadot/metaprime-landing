<template>
  <div class="container">
    <MetaPrime class="mb-4 max-w-xs md:max-w-sm" />
    <h2
      class="
        font-semibold
        text-4xl lg:text-7xl
        text-primary
        leading-none
        uppercase mb-6 md:mb-16
      "
    >
      Diagram
    </h2>

    <Picture
      imageDesktop="/assets/images/diagram.webp"
      imageDefault="/assets/images/diagram.png"
      alt="Diagram"
      img-class="max-w-full"
    />
  </div>
</template>

<script>
import MetaPrime from '@/assets/images/meta-prime.svg'
import Picture from '@/components/atoms/Picture'

export default {
  components: {
    MetaPrime,
    Picture
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
