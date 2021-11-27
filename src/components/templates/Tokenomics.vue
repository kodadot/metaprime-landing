<template>
<!-- Section 1 -->
<section>
  <Hero v-bind="section1" class="flex items-center xl:min-h-[34.25rem]">
    Add tokenomics text
  </Hero>
</section>
<!-- Section 1 -->
</template>

<script>
import Hero from '@/components/organisms/Hero.vue'

export default {
  components: {
    Hero
  },
  setup () {
    const section1 = {
      heading: {
        tag: 'h2',
        secondLine: 'Tokenomics'
      },
      bgClass: 'after:bg-lines-secondary'
    }

    return {
      section1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
