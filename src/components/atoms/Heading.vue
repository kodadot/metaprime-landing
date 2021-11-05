<template>
  <component
    :is="tag"
    :class="[
      `inline-flex
      pb-6 mb-6
      uppercase
      text-3xl md:text-5xl font-semibold`,
      { 'text-secondary border-secondary' : !light },
      { 'text-secondary-light border-secondary-light' : light },
      { 'border-b-4 ' : border }
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
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    return {}
  }
}
</script>
