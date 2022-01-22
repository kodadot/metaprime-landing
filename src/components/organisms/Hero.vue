<template>
<div class="md:flex md:flex-col-reverse">
  <div
    class="relative overflow-hidden mb-8"
  >
    <Picture
      v-if="bg"
      v-bind="bg"
      img-class="absolute -z-10 w-full h-full object-cover"
    />
    <div class="container flex flex-col md:flex-row justify-between py-10 md:py-20">
      <div class="container relative hidden md:flex flex-col mb-4 justify-center">
        <HeadingSecondary
          v-bind="heading"
        />
        <Content>
          <slot />
        </Content>
      </div>

      <Picture
        v-if="img && !showModelViewer"
        v-bind="img"
        img-class="max-w-xs md:max-w-md object-contain mx-auto md:mx-0"
      />

    </div>
  </div>
  <div class="container relative md:hidden flex flex-col mb-4 justify-center">
    <HeadingSecondary
      v-bind="heading"
    />
    <Content>
      <slot />
    </Content>
  </div>
</div>
</template>

<script>
import HeadingSecondary from '@/components/atoms/HeadingSecondary.vue'
import Content from '@/components/atoms/Content.vue'
import Picture from '@/components/atoms/Picture.vue'

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
    },
    showModelViewer: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {}
  }
}
</script>
