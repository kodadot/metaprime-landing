<template>
<!-- Section 1 -->
<section>
  <Hero v-bind="section1" class="flex items-center xl:min-h-[34.25rem]">
    Read below and find out how to <br>
    help grow an open metaverse
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
        We want to have your back while you build an open metaverse island on MetaPrime. One for all, all for one! We want to give robust and anti fragile opportunities to anyone that will be building on top of MetaPrime, bringing their own innovation, novelty and perspective. You might be that one special unicorn we are looking for. It's all about taking the first step and giving it a shot.
      </p>
      <p class="mb-6">
      Realize your vision alongside the MetaPrime family and harvest experience along your evolution while delivering your brightest ideas for others in the form of public goods. We are here to hack together and bring the next wave of opportunities to new comers in this world.
      </p>
      <p class="mb-6">
        We will offer you a range of interesting contacts within DeFi, NFT, DAO and an entire network of spatial developers. Spatial is where we are heading and we must be faster than corporate metaverses as they will scale at rapid pace.
      </p>
      <p class="mb-6">
      We believe that the current legacy of the world is not evolving towards benefitting new-ones. The Meatspace is a slow moving legacy world with fixed rules where old institutions (like goverments, media, etc) control our perception, property and money. This is bad for innovative solutions, but great for old and established institutional powers. We want to give people the tools that break the institutional privledge.
      </p>
      <p class="mb-6">
      The corporate metaverse is an online world where new internet institutions (Facebook, Twitter, etc) control our perception, property and money globally. This is better for society than the Meatspace but far from ideal, as it still benefits institutional privledge.
      </p>
    </Content>
    <img src="/assets/images/twitter-post.png" alt="" loading="lazy" class="mb-16">

    <Heading tag="h3" class="mb-16">
      WHO YOU ARE
    </Heading>
    <Content class="max-w-3xl mb-16">
      <ul class="space-y-4">
        <li>
          - Passionate and enthusiastic
        </li>
        <li>
          - Experimentation is your native language
        </li>
        <li>
          - Your dapp needs lower costs execution environment
        </li>
        <li>
          - You are bullish on a multi-chain future
        </li>
      </ul>
    </Content>
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
        secondLine: 'Grants'
      },
      img: {
        url: '/assets/images/grants-hero.png',
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
