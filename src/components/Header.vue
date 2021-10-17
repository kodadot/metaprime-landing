<template>
  <header>
    <Navigation />
    <Hero />
  </header>
</template>

<script>
import Navigation from '@components/Navigation.vue'
import Hero from '@components/Hero.vue'

export default {
  components: {
    Navigation,
    Hero
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
