<template>
  <component
    :is="tag"
    class="font-semibold uppercase flex flex-col mb-6"
  >
    <span
      :class="[
        `text-secondary text-4xl lg:text-7xl leading-none`,
        firstLineClass
      ]"
    >
      {{ firstLine }}
    </span>
    <span
      :class="[
        `text-primary text-4xl lg:text-7xl leading-none`,
        secondLineClass
      ]"
    >
      {{ secondLine }}
    </span>
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    firstLine: {
      type: String,
      default: ''
    },
    firstLineClass: {
      type: String,
      default: ''
    },
    secondLine: {
      type: String,
      default: ''
    },
    secondLineClass: {
      type: String,
      default: ''
    },
  },
  setup () {
    return {}
  }
}
</script>
