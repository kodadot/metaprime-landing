<template>
  <div
    class="relative overflow-hidden"
  >
    <img v-if="bg" :src="bg" alt="" class="absolute -z-10 w-full h-full object-cover" loading="lazy">

    <div
      :class="[
        `container  py-10 md:py-20`,
        containerClass
      ]
    ">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    bg: {
      type: String,
      default: ''
    },
    containerClass: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  }
}
</script>
