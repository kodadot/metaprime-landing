<template>
  <div
    class="relative overflow-hidden"
  >
    <Picture
      v-if="bg"
      v-bind="bg"
      img-class="absolute -z-10 w-full h-full object-cover"
    />
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
import Picture from '@/components/atoms/Picture'

export default {
  components: {
    Picture
  },
  props: {
    bg: {
      type: Object,
      default: () => {}
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
