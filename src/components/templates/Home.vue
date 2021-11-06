<template>
<!-- Section 1 -->
<section>
  <Hero v-bind="section1" class="xl:min-h-[36.875rem]">
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
<section class="py-10 md:py-20">
  <Diagram />
</section>
<!-- Section 4 -->

<!-- Section 5 -->
<section class="py-10 md:py-20">
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
<section class="py-10 md:py-20">
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
<section class="py-10 md:py-20">
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
<section class="py-10 md:py-20">
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
<section class="py-10 md:py-20">
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
<section class="py-10 md:py-20">
  <HeroCustom bg-class="after:bg-lines-secondary" container-class="md:flex-col">
    <div class="flex justify-start mb-10">
      <Content class="max-w-2xl px-16 py-8 border-2 border-secondary-light rounded-3xl">
        <p class="italic">
          This Metaverse is going to be far more pervasive and powerful than anything else. If one central company gains control of this, they will become more powerful
          than any government, and be a god on Earth.
        </p>
        <p class="font-semibold">
          - Tim Sweeney
        </p>
      </Content>
    </div>
    <div class="flex justify-end">
      <Content class="max-w-2xl px-16 py-8 border-2 border-secondary-light rounded-3xl">
        <p class="italic">
          This Metaverse is going to be far more pervasive and powerful than anything else. If one central company gains control of this, they will become more powerful
          than any government, and be a god on Earth.
        </p>
        <p class="font-semibold">
          - Tim Sweeney
        </p>
      </Content>
    </div>
  </HeroCustom>
</section>
<!-- Section 10 -->

<!-- Section 11 -->
<section class="py-10 md:py-20">
  <div
    class="
      container
      flex flex-col md:flex-row
      justify-between items-start md:items-center
    "
  >
    <Heading class="mb-16 md:mb-0 md:mr-4" tag="h3">
      <span>
        AUGMENTED BONDING <br>
        CURVE WITH A FOCUS <br>
        ON
        <span class="text-white">
          PUBLIC GOODS
        </span>
      </span>
    </Heading>
    <div>
      <img
        src="/assets/images/sierpinski.png"
        alt="Sierpinski triangle"
        class="max-w-xs md:max-w-full"
        loading="lazy"
      >
    </div>
  </div>
</section>
<!-- Section 11 -->

<!-- Section 12 -->
<section class="py-10 md:py-20">
  <HeroCustom bg-class="after:bg-lines-secondary" class="overflow-visible">
    <Heading tag="h3">
      <span>
        Build
        <span class="text-white">
          On
        </span>
        <br>
        The Fly
      </span>
    </Heading>
    <div class="relative w-full flex flex-col justify-center items-center">
      <img
        src="/assets/images/buildings.png"
        alt="Buildings"
        class="max-w-xs md:max-w-full mb-4 lg:mb-0"
        loading="lazy"
      >
      <Tag
        class="lg:absolute top-0 lg:right-0 xl:-right-16 mb-4 md:py-10 bg-black max-w-lg"
        content="
          SDK - bringing native deep
          integration with future-metaverse
          native frameworks like goDot,
          Unity, a-frame"
      />
      <Tag
        class="lg:absolute bottom-0 lg:left-0 mb-4 md:py-10 bg-black max-w-sm"
        content="
          Building tools for
          future Metaverse
          creators and architects"
      />
      <Tag
        class="lg:absolute -bottom-44 lg:right-0 z-10 mb-4 md:py-10 bg-black max-w-xl"
        content="No-code deployment creators storefront (MinuteShop codename). We understand that there are non-tech savvy creators and they want to deploy their own smart contracts and be in full ownership of their storefront."
      />
    </div>

  </HeroCustom>
</section>
<!-- Section 12 -->

<!-- Section 13 -->
<section class="py-10 md:py-20">
  <div class="container">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:mb-16">
      <HeadingSecondary
        tag="h3"
        class="mb-6 md:mb-0"
        first-line="Core"
        second-line="Primitives"
      />
      <img
        src="/assets/images/primitives1.png"
        alt=""
        loading="lazy"
        class="max-w-xs lg:max-w-none"
      />
    </div>
    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:mb-16">
      <img
        src="/assets/images/primitives2.png"
        alt=""
        loading="lazy"
        class="max-w-xs lg:max-w-none mb-6 md:mb-0 md:mr-6"
      />
      <Content class="max-w-lg">
        NFT fractionalizing augmented
        bonding curve with tuneable parameters
      </Content>
    </div>
    <div class="flex flex-col md:flex-row-reverse md:justify-between md:items-center mb-6 md:mb-16">
      <img
        src="/assets/images/primitives3.png"
        alt=""
        loading="lazy"
        class="max-w-xs lg:max-w-none mb-6 md:mb-0"
      />
      <Content class="max-w-lg">
        NFT-Backed loans to fuel rentals from
        Fractional Ownership through Shared liquidity on MetaPrime
      </Content>
    </div>
    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:mb-16">
      <div class="flex">
        <img
          src="/assets/images/primitives4.png"
          alt=""
          loading="lazy"
          class="mr-8 max-w-xs lg:max-w-none hidden lg:flex"
        />
        <img
          src="/assets/images/primitives4.png"
          alt=""
          loading="lazy"
          class="max-w-xs lg:max-w-none mb-6 md:mb-0 md:mr-6"
        />
      </div>
      <Content class="max-w-lg">
        Generative pallet for generating on-chain NFTs
        with rich parametrisation, i.e use-cases for MMORPG, Art collections,
        leveraging external resources
      </Content>
    </div>
  </div>
</section>
<!-- Section 13 -->

<!-- Section 14 -->
<section class="py-10 md:py-20">
  <HeroCustom bg-class="after:bg-lines-secondary">
    <HeadingSecondary
      tag="h3"
      class="mb-6 md:mb-0"
      first-line="A Multi Chain"
      second-line="Future"
      second-line-class="lg:text-9xl"
    />
    <Content class="my-12">
      Fueled by interoperability
    </Content>
    <div class="flex flex-col">
      <TagSecondary
        class="mb-4 md:py-10 bg-black text-white justify-start max-w-2xl"
      >
        <img src="/assets/images/future1.png" alt="" loading="lazy" class="mr-10 w-24" />
        Native Bridging with Solana, <br>
        Near, Flow, Ethereum"
      </TagSecondary>
      <TagSecondary
        class="mb-4 md:py-10 bg-black max-w-2xl"
      >
        <img src="/assets/images/future2.png" alt="" loading="lazy" class="mr-10 w-24" />
        Future development: <br>
        Cross chain atomic swaps
      </TagSecondary>
      <TagSecondary
        class="mb-4 md:py-10 bg-black max-w-2xl"
      >
        <img src="/assets/images/future3.png" alt="" loading="lazy" class="mr-10 w-24" />
        Integrations with HMD vendors <br>
        like Magic Leap, Hololens, <br>
        nReal, North Star
      </TagSecondary>
    </div>
  </HeroCustom>
</section>
<!-- Section 14 -->

<!-- Section 15 -->
<section class="py-10 md:py-20">
  <div class="container">
    <Heading tag="h3" class="mb-16">
      Ecosystem Support
    </Heading>
    <div class="flex flex-col md:flex-row md:flex-wrap space-y-6  lg:space-y-0 items-start md:items-center md:space-x-4 mb-20">
      <img src="/assets/logos/web3.png" alt="web3 foundation" loading="lazy">
      <img src="/assets/logos/kusama.png" alt="kusama" loading="lazy">
    </div>

    <Heading tag="h3" class="mb-16">
      Partners
    </Heading>
    <img src="/assets/logos/kusama2.png" alt="kusama" loading="lazy" class="mb-10">
    <div class="flex flex-col md:flex-row md:flex-wrap space-y-6  lg:space-y-0 items-start md:items-center justify-between md:space-x-4 mb-12">
      <img src="/assets/logos/rmrk.png" alt="" loading="lazy">
      <img src="/assets/logos/arweave.png" alt="" loading="lazy">
      <img src="/assets/logos/subquery.png" alt="" loading="lazy">
      <img src="/assets/logos/polkadotjs.png" alt="" loading="lazy">
    </div>
    <div class="flex flex-col md:flex-row md:flex-wrap space-y-6  lg:space-y-0 items-start md:items-center justify-between md:space-x-4 mb-20">
      <img src="/assets/logos/basilisk.png" alt="" loading="lazy">
      <img src="/assets/logos/litentry.png" alt="" loading="lazy">
      <img src="/assets/logos/subsocial.png" alt="" loading="lazy">
      <img src="/assets/logos/patract.png" alt="" loading="lazy">
    </div>

    <Heading tag="h3" class="mb-16">
      Investors
    </Heading>
    <div class="flex flex-col md:flex-row md:flex-wrap space-y-6  lg:space-y-0 items-start md:items-center justify-between md:space-x-4 mb-12">
      <img src="/assets/logos/ellipti.png" alt="" loading="lazy">
      <img src="/assets/logos/kr1.png" alt="" loading="lazy">
      <img src="/assets/logos/hypersphere.png" alt="" loading="lazy">
      <img src="/assets/logos/permanent-ventures.png" alt="" loading="lazy">
      <img src="/assets/logos/cms.png" alt="" loading="lazy">
    </div>
    <div class="flex flex-col md:flex-row md:flex-wrap space-y-6  lg:space-y-0 items-start md:items-center justify-between md:space-x-4 mb-20">
      <img src="/assets/logos/zee-prime-capital.png" alt="" loading="lazy">
      <img src="/assets/logos/0x-ventures.png" alt="" loading="lazy">
      <img src="/assets/logos/tokonomy.png" alt="" loading="lazy">
      <img src="/assets/logos/jsquare.png" alt="" loading="lazy">
      <img src="/assets/logos/trgc.png" alt="" loading="lazy">
    </div>
    <!-- <Heading tag="h3">
      Angel Inv <br>
      & Tweets
    </Heading> -->
  </div>
</section>
<!-- Section 15 -->

<!-- Section 16 -->
<section class="py-10 md:py-20">
  <HeroCustom bg-class="after:bg-grid">
    <HeadingSecondary
      tag="h3"
      class="mb-12 text-center"
      second-line="Our Projects"
    />
    <div class="flex flex-col items-center space-y-10 lg:space-y-0  lg:space-x-10 lg:flex-row lg:justify-between">
      <div class="max-w-[30.5rem] lg:min-h-[24rem] border-2 border-secondary bg-black p-4 rounded-3xl shadow-custom">
        <div class="flex justify-between items-center">
          <img src="/assets/logos/metadata.png" alt="" loading="lazy">
          <Content>
            MetaData hosting
            using Arweave
          </Content>
        </div>
        <div class="relative w-[20.375rem]">
          <img src="/assets/images/shape.png" alt="" loading="lazy">
          <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl uppercase">Permafrost</span>
        </div>
      </div>
      <div class="max-w-[30.5rem] lg:min-h-[24rem] border-2 border-secondary bg-black p-4 rounded-3xl shadow-custom">
        <div class="relative w-[20.375rem] ml-auto">
          <img src="/assets/images/shape.png" alt="" loading="lazy">
          <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl uppercase">Kodadot</span>
        </div>
        <div class="flex justify-between items-center">
          <img src="/assets/logos/kodadot.png" alt="" loading="lazy">
          <Content>
            Scaffold boilerplate
            to drive utility of
            MetaPrime
          </Content>
        </div>
      </div>
    </div>
  </HeroCustom>
</section>
<!-- Section 16 -->

<!-- Section 17 -->
<section>
  <HeroCustom>
    <div class="flex flex-col flex-col-reverse lg:flex-row justify-between items-center">
      <div>
        <HeadingSecondary
          tag="h3"
          class="mb-12"
          second-line="Grants"
        />
        <Content class="max-w-xl mb-8">
          We want to drive public good for Metaprime citizens through Treasury funding. We aim to sponsor builders with great track record out there. We plan to bootstrap first 30% of original blueprint and rest will be up to the MetaPrime community what they are will be building for Open Metaverse Infrastructure.
        </Content>
        <!-- <a href="#" class="inline-flex bg-primary text-black font-semibold text-2xl uppercase rounded-3xl px-12 py-3">
          Find out more
        </a> -->
      </div>
      <div class="mb-10">
        <img src="/assets/images/grants.png" alt="" loading="lazy">
      </div>
    </div>
  </HeroCustom>
</section>
<!-- Section 17 -->

<!-- Section 18 -->
<!-- <section>
  <HeroCustom bg-class="after:bg-lines">
    <div class="flex flex-col flex-col-reverse lg:flex-row justify-between items-center">
      <div>
        <HeadingSecondary
          tag="h3"
          class="mb-12"
          second-line="Subscribe"
        />
        <Content class="max-w-xl mb-8">
          Keep an eye on our latest tools
          and development via newsletter.
        </Content>
        <div class="relative max-w-lg">
          <input type="email" placeholder="Enter your email..." class="w-full h-14 px-5 py-4 rounded-3xl text-gray-500 font-semibold pr-64">
          <a href="#" class="absolute right-0 top-0 inline-flex bg-primary text-black font-semibold text-2xl uppercase rounded-3xl px-12 py-3">
            Subscribe
          </a>
        </div>
      </div>
      <div class="mb-10">
        <img src="/assets/images/subscribe.png" alt="" loading="lazy">
      </div>
    </div>
  </HeroCustom>
</section> -->
<!-- Section 18 -->

<!-- Section 19 -->
<section class="pt-28">
  <div class="container">
    <Heading
      tag="h3"
      class="italic"
      :border="false"
    >
      THE METAVERSE IS NOT IN THE <br>
      FUTURE, IT’S ALREADY HERE
    </Heading>
  </div>
</section>
<!-- Section 19 -->

</template>

<script>
import Heading from '@/components/atoms/Heading'
import HeadingSecondary from '@/components/atoms/HeadingSecondary'
import Hero from '@/components/organisms/Hero'
import HeroCustom from '@/components/organisms/HeroCustom'
import Diagram from '@/components/organisms/Diagram'
import Tag from '@/components/atoms/Tag.vue'
import TagSecondary from '@/components/atoms/TagSecondary.vue'
import Content from '@/components/atoms/Content.vue'
import Woman from '@/assets/images/woman.svg'
export default {
  components: {
    Hero,
    HeroCustom,
    Diagram,
    Heading,
    HeadingSecondary,
    Tag,
    TagSecondary,
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
        url: '/assets/images/triangle.webp',
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
        url: '/assets/images/group.webp',
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
