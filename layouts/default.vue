<template>
  <div>
    <Hero />
    <Manifesto />
    <Getrevue />
  </div>
</template>

<script>
import Hero from '@/pages/hero.vue';
import Manifesto from '~/pages/manifesto.vue';
import Getrevue from '~/pages/getrevue.vue';

export default {
  components: {
    Hero,
    Manifesto,
    Getrevue  },

  data () {
    return {}
  }
}
</script>
