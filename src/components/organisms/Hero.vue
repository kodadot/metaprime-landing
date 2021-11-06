<template>
  <div
    class="relative overflow-hidden"
  >
    <img v-if="bg" :src="bg" alt="" class="absolute -z-10 w-full h-full object-cover" :loading="bgLazy">
    <div class="container flex flex-col md:flex-row justify-between py-10 md:py-20">
      <div class="relative flex flex-col mb-4 justify-center">
        <HeadingSecondary
          v-bind="heading"
        />
        <Content>
          <slot />
        </Content>
      </div>
      <img
        v-if="img && img.url"
        class="max-w-md object-contain"
        :src="img.url"
        :alt="img.alt"
        :loading="img.lazy ? 'lazy' : undefined"
      >
    </div>
  </div>
</template>

<script>
import HeadingSecondary from '@/components/atoms/HeadingSecondary'
import Content from '@/components/atoms/Content'

export default {
  components: {
    HeadingSecondary,
    Content
  },
  props: {
    heading: {
      type: Object,
      required: true,
    },
    content: {
      type: String,
      default: ''
    },
    img: {
      type: Object,
      default: () => {}
    },
    bg: {
      type: String,
      default: ''
    },
    bgLazy: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    return {}
  }
}
</script>
