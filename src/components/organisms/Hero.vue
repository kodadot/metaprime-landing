<template>
  <div
    class="relative overflow-hidden"
  >
    <Picture
      v-if="bg"
      v-bind="bg"
      img-class="absolute -z-10 w-full h-full object-cover"
    />
    <div class="container flex flex-col md:flex-row justify-between py-10 md:py-20">
      <div class="relative flex flex-col mb-4 justify-center">
        <HeadingSecondary
          v-bind="heading"
        />
        <Content>
          <slot />
        </Content>
      </div>

      <Picture
        v-if="img"
        v-bind="img"
        img-class="max-w-xs md:max-w-md object-contain mx-auto md:mx-0"
      />
    </div>
  </div>
</template>

<script>
import HeadingSecondary from '@/components/atoms/HeadingSecondary'
import Content from '@/components/atoms/Content'
import Picture from '@/components/atoms/Picture'

export default {
  components: {
    HeadingSecondary,
    Content,
    Picture
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
      type: Object,
      default: () => {}
    }
  },
  setup () {
    return {}
  }
}
</script>
