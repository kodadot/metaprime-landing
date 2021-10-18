<template>
  <component
    :is="tag"
    :class="[
      `inline-flex
      pb-6 mb-6
      border-b-4
      text-5xl font-semibold`,
      { 'text-secondary border-secondary' : !light },
      { 'text-secondary-light border-secondary-light' : light }
    ]"
  >
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
    light: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {}
  }
}
</script>
