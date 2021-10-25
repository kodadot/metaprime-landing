<template>
  <div
    :class="`
      relative overflow-hidden py-10 md:py-20
      ${ bg ?
        `after:bg-${bg} after:bg-no-repeat after:bg-cover
        after:absolute after:top-0 after:left-0
        after:w-full after:h-full
        after:-z-10
        `
          : '' }
      `
    "
  >
    <div class="container flex flex-col md:flex-row justify-between">
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
    }
  },
  setup () {
    return {}
  }
}
</script>
