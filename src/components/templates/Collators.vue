<template>
<!-- Section 1 -->
<section>
  <Hero v-bind="section1" class="flex items-center xl:min-h-[34.25rem]">
    Help maintain the open metaverse!
  </Hero>
</section>
<!-- Section 1 -->

<!-- Section 2 -->
<section class="py-20">
  <div class="container">
    <Heading tag="h3" class="mb-16">
      Mission
    </Heading>
    <Content class="max-w-3xl mb-16">
      <p class="mb-6">
      Would you like to secure a future for us and yourself? We will be giving away rich incentives for our most precious asset — validators. Someone needs to make sure that our presence in the digital world is accessible 24/7 and fully secured.
      </p>
      <p class="mb-6">
      You will be earning protocol-level MetaPrime rewards by prviding block production and supporting the liveliness of the network
      </p>
    </Content>

    <Heading tag="h3" class="mb-16">
      APPLY NOW
    </Heading>
    <div>
      <a
      href="#"
      class="
        inline-flex
        bg-primary
        text-black font-semibold text-2xl
        uppercase
        rounded-3xl
        px-12 py-3"
    >
        Apply Now
      </a>
    </div>
  </div>
</section>
<!-- Section 2 -->
</template>

<script>
import Heading from '@/components/atoms/Heading.vue'
import Content from '@/components/atoms/Content.vue'
import Hero from '@/components/organisms/Hero.vue'

export default {
  components: {
    Heading,
    Hero,
    Content
  },
  setup () {
    const section1 = {
      heading: {
        tag: 'h2',
        secondLine: 'Collators'
      },
      img: {
        url: '/assets/images/collators.png',
        alt: ''
      },
      bgClass: 'after:bg-lines-secondary'
    }

    return {
      section1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
