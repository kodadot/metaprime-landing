<template>
  <div class="container">
    <MetaPrime class="mb-4 max-w-xs md:max-w-sm" />
    <h2
      class="
        font-semibold
        text-4xl lg:text-7xl
        text-primary
        leading-none
        uppercase mb-6
      "
    >
      Diagram
    </h2>
    <Diagram class="max-w-6xl" />
  </div>
</template>

<script>
import Diagram from '@/assets/images/diagram.svg'
import MetaPrime from '@/assets/images/meta-prime.svg'

export default {
  components: {
    Diagram,
    MetaPrime
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
