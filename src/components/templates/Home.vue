<template>
<!-- Section 1 -->
<section>
  <Hero v-bind="section1">
    Your vehicle for exploring and
    building immersive realities.
  </Hero>
</section>
<!-- Section 1 -->

<!-- Section 2 -->
<section>
  <Hero v-bind="section2">
    <span class="flex mb-4">
      noun |
      <span class="italic">ˈmɛtəvɜː(ɹ)s/</span>
    </span>

    A hypothetical future (counterpart or continuation of the) Internet, created by
    the convergence of virtually enhanced
    physical reality and physically persistent
    virtual space.
  </Hero>
</section>
<!-- Section 2 -->

<!-- Section 3 -->
<section>
  <HeroCustom v-bind="section3">
    <h2 class="font-semibold text-4xl lg:text-7xl leading-none uppercase">
      <span>An</span>
      <span class="text-primary">Experimental</span>,
      <span class="text-primary">Open</span>
      <span>Metaverse</span><br>
      <span class="text-primary">Blockchain</span>
    </h2>
  </HeroCustom>
</section>
<!-- Section 3 -->

<!-- Section 4 -->
<section class="py-20">
  <Diagram />
</section>
<!-- Section 4 -->

<!-- Section 5 -->
<section class="py-20">
  <div class="container">
    <Heading class="mb-16" tag="h3">
      WEB 3.0 TOOLBOX FOR <br>
      THE OPEN METAVERSE
    </Heading>
    <div class="flex flex-col md:flex-row md:items-center mb-10">
      <div>
        <Woman class="mb-4 md:mr-12" />
      </div>
      <Content class="max-w-xl">
        <p class="mb-6">
          Building a highly composable web3 toolbox which will effectively become a public good.
        </p>
        <p>
          Leveraging protocol composables <br>
          from other parachains, such as:
        </p>
      </Content>
    </div>
    <div>
      <div class="mb-2 space-x-2 space-y-2">
        <Tag content="DeFi" />
        <Tag content="Liquidity Pools" />
        <Tag content="Self-sovereign identity" />
      </div>
      <div class="space-x-2 space-y-2">
        <Tag content="Decentralized Governance" />
        <Tag content="Oracles" />
      </div>
    </div>
  </div>
</section>
<!-- Section 5 -->

<!-- Section 6 -->
<section class="py-20">
  <div class="container">
    <Heading class="mb-16" tag="h3">
      EXAMPLES OF WHAT <br>
      YOU WILL BE BUILDING:
    </Heading>
    <div class="grid gap-16 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="flex flex-col items-center justify-end">
        <img
          src="/assets/images/minting-houses.png"
          alt="Minting Houses"
          class="mb-12"
          loading="lazy"
        >
        <Tag content="Minting Houses" />
      </div>
      <div class="flex flex-col items-center justify-end">
        <img
          src="/assets/images/marketplaces.png"
          alt="Marketplaces"
          class="mb-12"
          loading="lazy"
        >
        <Tag content="Marketplaces" />
      </div>
      <div class="flex flex-col items-center justify-end">
        <img
          src="/assets/images/token-standards.png"
          alt="Token Standards"
          class="mb-12"
          loading="lazy"
        >
        <Tag content="Token Standards" />
      </div>
      <div class="flex flex-col items-center justify-end">
        <img
          src="/assets/images/metadata-standards.png"
          alt="Metadata Standards"
          class="mb-12"
          loading="lazy"
        >
        <Tag content="Metadata Standards" />
      </div>
      <div class="flex flex-col items-center justify-end">
        <img
          src="/assets/images/hybrid-nfts.png"
          alt="Hybrid NFTs + FT"
          class="mb-12"
          loading="lazy"
        >
        <Tag content="Hybrid NFTs + FT" />
      </div>
      <div class="flex flex-col items-center justify-end">
        <img
          src="/assets/images/physical-nfts.png"
          alt="Physical NFTs"
          class="mb-12"
          loading="lazy"
        >
        <Tag content="Physical NFTs" />
      </div>
    </div>
  </div>
</section>
<!-- Section 6 -->


<!-- Section 7 -->
<section class="py-20">
  <div class="container">
    <Heading class="mb-16" tag="h3">
      WE WANT TO:
    </Heading>
    <div class="grid gap-16 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="flex flex-col items-center justify-start">
        <img
          src="/assets/images/person1.png"
          alt="Enable everyone to participate in a programmable culture layer"
          class="mb-12"
          loading="lazy"
        >
        <Tag
          class="max-w-xs"
          content="Enable everyone to participate in a programmable culture layer"
        />
      </div>
      <div class="flex flex-col items-center justify-start">
        <img
          src="/assets/images/person2.png"
          alt="Empower gamer guilds and clans"
          class="mb-12"
          loading="lazy"
        >
        <Tag
          class="max-w-xs"
          content="Empower gamer guilds and clans"
        />
      </div>
    </div>
  </div>
</section>
<!-- Section 7 -->

<!-- Section 8 -->
<section class="py-20">
  <div class="container">
    <Heading class="mb-16" tag="h3">
      ALLOW EASIER <br>
      ACCESS TO:
    </Heading>
    <div class="grid gap-16 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="flex flex-col items-center justify-start">
        <div class="h-72">
          <img
            src="/assets/images/access1.png"
            alt="Enable everyone to participate in a programmable culture layer"
            loading="lazy"
          >
        </div>
        <div class="flex flex-col items-center justify-center">
          <Tag class="mb-3 mr-0 w-64" content="In-game objects" />
          <Tag class="mb-3 w-64" content="Data assets" />
          <Tag class="mb-3 w-64" content="Composable Economies" />
        </div>
      </div>
      <div class="flex flex-col items-center justify-start">
        <div class="h-72">
          <img
            src="/assets/images/access2.png"
            alt="Enable everyone to participate in a programmable culture layer"
            loading="lazy"
          >
        </div>
        <div class="flex flex-col items-center justify-center">
          <Tag class="mb-3 w-64" content="VRM Based Avatars" />
          <Tag class="mb-3 w-64" content="Financial Instruments" />
          <Tag class="mb-3 w-64" content="Content" />
         </div>
      </div>
      <div class="flex flex-col items-center justify-start">
        <div class="h-72 relative -top-8">
          <img
            src="/assets/images/access3.png"
            alt="Enable everyone to participate in a programmable culture layer"
            class="mb-12"
            loading="lazy"
          >
        </div>
        <div class="flex flex-col items-center justify-center">
          <Tag class="mb-3 w-64" content="Space" />
          <Tag class="mb-3 w-64" content="Currency" />
          <Tag class="mb-3 w-64" content="Virtual Space" />
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Section 8 -->

<!-- Section 9 -->
<section class="py-20">
  <div class="container">
    <Heading class="mb-16" tag="h3">
      WE REALLY <br>
      WANT TO SEE:
    </Heading>
    <div class="flex flex-col items-start">
      <Tag class="mb-3" content="3D Modelling toolchains" />
      <Tag class="mb-3" content="Gaming Engines" />
      <Tag class="mb-3" content="Rendering Stacks" />
    </div>
  </div>
</section>
<!-- Section 9 -->


<!-- Section 10 -->
<section class="py-20">
  <HeroCustom bg-class="after:bg-lines-secondary" container-class="md:flex-col">
    <div class="flex justify-start mb-10">
      <Content class="max-w-2xl px-16 py-8 border-2 border-secondary-light rounded-3xl">
        <p class="font-light italic">
          This Metaverse is going to be far more pervasive and powerful than anything else. If one central company gains control of this, they will become more powerful
          than any government, and be a god on Earth.
        </p>
        <p class="font-medium">
          - Tim Sweeney
        </p>
      </Content>
    </div>
    <div class="flex justify-end">
      <Content class="max-w-2xl px-16 py-8 border-2 border-secondary-light rounded-3xl">
        <p class="font-light italic">
          This Metaverse is going to be far more pervasive and powerful than anything else. If one central company gains control of this, they will become more powerful
          than any government, and be a god on Earth.
        </p>
        <p class="font-medium">
          - Tim Sweeney
        </p>
      </Content>
    </div>
  </HeroCustom>
</section>
<!-- Section 10 -->
</template>

<script>
import Heading from '@/components/atoms/Heading'
import Hero from '@/components/organisms/Hero'
import HeroCustom from '@/components/organisms/HeroCustom'
import Diagram from '@/components/organisms/Diagram'
import Tag from '@/components/atoms/Tag.vue'
import Content from '@/components/atoms/Content.vue'
import Woman from '@/assets/images/woman.svg'
export default {
  components: {
    Hero,
    HeroCustom,
    Diagram,
    Heading,
    Tag,
    Content,
    Woman
  },
  setup () {
    const section1 = {
      heading: {
        tag: 'h2',
        firstLine: 'Unlock the',
        secondLine: 'Metaverse'
      },
      img: {
        url: '/assets/images/triangle.png',
        alt: ''
      },
      bgClass: 'after:bg-lines'
    }

    const section2 = {
      heading: {
        tag: 'h2',
        firstLine: 'What is this',
        secondLine: 'Buzzword'
      },
      img: {
        url: '/assets/images/group.png',
        alt: '',
        lazy: true
      }
    }

    const section3 = {
      heading: {
        tag: 'h2',
        firstLine: 'What is this',
        secondLine: 'Buzzword'
      },
      bgClass: 'after:bg-lines-secondary'
    }

    return {
      section1,
      section2,
      section3
    }
  }
}
</script>
