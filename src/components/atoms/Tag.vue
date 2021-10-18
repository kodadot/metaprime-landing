<template>
  <span
    class="
      inline-flex items-center justify-center
      rounded-3xl
      px-4 py-2 mr-4
      border-2 border-primary
      text-primary text-2xl text-center
      font-secondary
    "
  >
    {{ content }}
  </span>
</template>

<script>
export default {
  props: {
    content: {
      Type: String,
      required: true
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
