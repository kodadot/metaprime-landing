<template>
  <section class="relative py-3 bg-dark">
    <div class="container flex items-center justify-between h-20 mx-auto">
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
            font-extrabold
            leading-none
            select-none
          "
          aria-label="Metaprime"
        >
          <Logo />
        </a>
      </h1>
      <nav
        class="
          items-center
          justify-center
          hidden
          space-x-14
          text-gray
          md:flex
        "
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
          href="/tokenmonics"
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
      </nav>

      <div class="flex items-center justify-center h-full text-white md:hidden">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 8h16M4 16h16"
          ></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '../assets/logo.svg'
export default {
  components: {
    Logo
  },
  setup() {
    return {}
  },
}
</script>
