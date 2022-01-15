<template>
  <Disclosure>
    <DisclosureButton
      class="flex justify-between items-center w-full px-10 py-3 rounded-xl mb-4 text-xl md:text-[2.5rem] md:leading-none text-left font-semibold text-secondary bg-gray-dark"
    >
      <slot name="button" />
      <Triangle />
    </DisclosureButton>
    <DisclosurePanel class="pt-16 pb-28">
      <slot />
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue'
  import Triangle from '@/assets/triangle.svg'

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Triangle
    }
  }
</script>
