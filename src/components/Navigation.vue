<template>
  <section class="bg-dark">
    <div class="container flex items-center justify-between h-16 lg:h-20 mx-auto">
      <h1>
        <a
          href="/"
          class="
            relative
            z-10
            flex
            items-center
            w-auto
            text-2xl
            leading-none
            select-none
          "
          aria-label="Metaprime"
        >
          <Logo />
        </a>
      </h1>
      <!-- <nav
        :class="[
          { 'hidden': !show },
          `
          absolute lg:relative z-10
          top-16 left-0 lg:top-0 px-4 py-4
          text-center
          bg-dark w-full h-full
          items-center
          justify-center lg:justify-end
          space-x-12
          text-gray
          lg:flex`
        ]"
      >
        <a
          href="/hackathon"
          class="
            text-lg
            text-gray
            hover:text-primary
          "
        >
          <span class="block">Hackathon</span>
        </a>
        <a
          href="/tokenomics"
          class="
            text-lg
            text-gray
            hover:text-primary
          "
        >
          <span class="block">Tokenomics</span>
        </a>
        <a
          href="/docs"
          class="
            text-lg
            text-gray
            hover:text-primary
          "
        >
          <span class="block">Docs</span>
        </a>
        <a
          href="/grants"
          class="
            text-lg
            text-gray
            hover:text-primary
          "
        >
          <span class="block">Grants</span>
        </a>
        <a
          href="/projects"
          class="
            text-lg
            text-gray
            hover:text-primary
          "
        >
          <span class="block">Projects</span>
        </a>
        <a
          href="/contact"
          class="
            text-lg
            text-gray
            hover:text-primary
          "
        >
          <span class="block">Contact</span>
        </a>
      </nav> -->

      <div class="flex items-center justify-center h-full text-white lg:hidden">
        <button aria-label="Menu Button" @click="show = !show" :aria-expanded="show">
            <svg class="fill-white" viewBox="0 0 24 24" width="24" height="24">
              <rect width="24" height="2"></rect>
              <rect y="10" width="24" height="2"></rect>
              <rect y="20" width="24" height="2"></rect>
            </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import Logo from '../assets/logo.svg'
export default {
  components: {
    Logo
  },
  setup() {
    const show = ref(false)

    return {
      show
    }
  },
}
</script>
