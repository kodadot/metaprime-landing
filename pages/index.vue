<template>
  <div class="">
    <hero />
    <manifesto />
    <getrevue />
  </div>
</template>

<script>
import hero from '@/pages/hero.vue';
import manifesto from '@/pages/manifesto.vue';
import getrevue from '@/pages/getrevue.vue';

export default {
  components: {
    hero,
    manifesto,
    getrevue  },

  data () {
    return {}
  }
}
</script>
