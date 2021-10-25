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
    <div
      :class="[
        `container flex flex-col md:flex-row justify-between`,
        containerClass
      ]
    ">
      <div class="relative flex flex-col justify-center">
        <slot />
      </div>
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
