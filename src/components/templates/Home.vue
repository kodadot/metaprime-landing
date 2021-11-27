<template>
<!-- Section 1 -->
<section>
  <Hero v-bind="section1" :bg="bgPrimary" showModelViewer class="xl:min-h-[36.875rem]">
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
        <img
          src="/assets/images/woman.png"
          alt="Woman"
          class="mb-4 md:mr-12"
          loading="lazy"
        >
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
      <div class="flex flex-col items-start md:items-center md:flex-row mb-2 md:mb-4 md:space-x-2 space-y-2 md:space-y-0">
        <Tag content="DeFi" />
        <Tag content="Liquidity Pools" />
        <Tag content="Self-sovereign identity" />
      </div>
      <div class="flex flex-col items-start md:items-center md:flex-row md:space-x-2 space-y-2 md:space-y-0">
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
  <HeroCustom :bg="bgSecondary"  container-class="md:flex-col">
    <div class="flex justify-start mb-10">
      <Content class="max-w-2xl px-4 md:px-16 py-8 border-2 border-secondary-light rounded-3xl bg-black">
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
      <Content class="max-w-2xl px-4 md:px-16 py-8 border-2 border-secondary-light rounded-3xl bg-black">
        <p class="italic">
          With time, an open Metaverse built on shared open source protocols, open infrastructure, and a single unifying (yet open) financial system will erode, or ‘eat,’ and potentially eventually replace closed platforms due to powerful network effects.
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
    <div class="w-full md:w-auto flex justify-center items-center">
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
  <HeroCustom :bg="bgSecondary" class="overflow-visible">
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
  <HeroCustom :bg="bgSecondary" >
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
    <div class="flex flex-col md:flex-row md:flex-wrap items-start md:items-center md:space-x-4 mb-20">
      <div class="flex items-center justify-start w-[16.25rem] mb-10 xl:mb-0">
        <img src="/assets/logos/web3.png" alt="web3 foundation" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem]">
        <img src="/assets/logos/kusama.png" alt="kusama" loading="lazy">
      </div>
    </div>

    <Heading tag="h3" class="mb-16">
      Partners
    </Heading>
    <img src="/assets/logos/kusama2.png" alt="kusama" loading="lazy" class="mb-10">
    <div class="flex flex-wrap items-start md:items-center justify-between xl:space-x-4 xl:mb-12">
      <div class="flex items-center justify-start w-[16.25rem] mb-10 xl:mb-0">
        <img src="/assets/logos/rmrk.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] mb-10 xl:mb-0">
        <img src="/assets/logos/arweave.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] mb-10 xl:mb-0">
        <img src="/assets/logos/subquery.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] mb-10 xl:mb-0">
        <img src="/assets/logos/polkadotjs.png" alt="" loading="lazy">
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:flex-wrap items-start md:items-center justify-between md:space-x-4 mb-20">
      <div class="flex items-center justify-start w-[16.25rem] mb-10 xl:mb-0">
        <img src="/assets/logos/basilisk.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] mb-10 xl:mb-0">
        <img src="/assets/logos/litentry.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] mb-10 xl:mb-0">
        <img src="/assets/logos/subsocial.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem]">
        <img src="/assets/logos/patract.png" alt="" loading="lazy">
      </div>
    </div>

    <Heading tag="h3" class="mb-16">
      Investors
    </Heading>
    <div class="flex flex-col md:flex-row md:flex-wrap items-start md:items-center justify-between md:space-x-4 xl:mb-12">
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/ellipti.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/kr1.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/hypersphere.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/permanent-ventures.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/cms.png" alt="" loading="lazy">
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:flex-wrap items-start md:items-center justify-between md:space-x-4 mb-20">
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/zee-prime-capital.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/0x-ventures.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/tokonomy.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto mb-10 xl:mb-0">
        <img src="/assets/logos/jsquare.png" alt="" loading="lazy">
      </div>
      <div class="flex items-center justify-start w-[16.25rem] md:w-auto">
        <img src="/assets/logos/trgc.png" alt="" loading="lazy">
      </div>
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
  <HeroCustom :bg="bgGrid">
    <HeadingSecondary
      tag="h3"
      class="mb-12 text-center"
      second-line="Our Projects"
    />
    <div class="flex flex-col items-center space-y-10 lg:space-y-0  lg:space-x-10 lg:flex-row lg:justify-between">
      <div class="max-w-[30.5rem] lg:min-h-[24rem] border-2 border-secondary bg-black p-4 rounded-3xl md:shadow-custom">
        <div class="flex justify-between items-center">
          <img src="/assets/logos/metadata.png" alt="" loading="lazy">
          <Content>
            MetaData hosting
            using Arweave
          </Content>
        </div>
        <div class="relative w-[20.375rem]">
          <img src="/assets/images/shape.png" alt="" loading="lazy">
          <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl uppercase">Permafrost</span>
        </div>
      </div>
      <div class="max-w-[30.5rem] lg:min-h-[24rem] border-2 border-secondary bg-black p-4 rounded-3xl md:shadow-custom">
        <div class="relative w-[20.375rem] ml-auto">
          <img src="/assets/images/shape.png" alt="" loading="lazy">
          <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl uppercase">Kodadot</span>
        </div>
        <div class="flex justify-between items-center">
          <img src="/assets/logos/kodadot.png" alt="" loading="lazy" class="w-1/2 md:w-auto">
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
<section class="pb-10 md:pb-20">
  <HeroCustom :bg="bgPrimary">
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
          <form
            action="https://www.getrevue.co/profile/metaprimenetwork/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <label
              for="member_email"
              class="hidden"
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email..."
              name="member[email]"
              id="member_email"
              class="w-full h-14 px-5 py-4 mb-4 md:mb-0 rounded-3xl text-gray-500 font-semibold md:pr-64"
              required
            >

            <div class="mb-4">
              <input
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                class="md:absolute right-0 top-0 inline-flex bg-primary text-black font-semibold text-2xl uppercase rounded-3xl px-12 py-3 cursor-pointer"
                id="member_submit"
              >
            </div>
            <p>
              By subscribing, you agree with Revue’s <a target="_blank" class="underline" rel="noopener noreferrer" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" class="underline" rel="noopener noreferrer" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
      <div class="mb-10">
        <img src="/assets/images/subscribe.png" alt="" loading="lazy">
      </div>
    </div>
  </HeroCustom>
</section>
<!-- Section 18 -->

<!-- Section 19 -->
<section class="md:pt-20">
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
import Heading from '@/components/atoms/Heading.vue'
import HeadingSecondary from '@/components/atoms/HeadingSecondary.vue'
import Hero from '@/components/organisms/Hero.vue'
import HeroCustom from '@/components/organisms/HeroCustom.vue'
import Diagram from '@/components/organisms/Diagram.vue'
import Tag from '@/components/atoms/Tag.vue'
import TagSecondary from '@/components/atoms/TagSecondary.vue'
import Content from '@/components/atoms/Content.vue'
export default {
  components: {
    Hero,
    HeroCustom,
    Diagram,
    Heading,
    HeadingSecondary,
    Tag,
    TagSecondary,
    Content
  },
  setup () {
    const bgPrimary = {
      imageMobile: '/assets/backgrounds/lines-mobile.webp',
      imageTablet: '/assets/backgrounds/lines-tablet.webp',
      imageDesktop: '/assets/backgrounds/lines.webp',
      imageDefault: '/assets/backgrounds/lines.png',
      alt: 'Background image',
      lazy: false
    }

    const bgSecondary = {
      imageMobile: '/assets/backgrounds/lines-secondary-mobile.webp',
      imageTablet: '/assets/backgrounds/lines-secondary-tablet.webp',
      imageDesktop: '/assets/backgrounds/lines-secondary.webp',
      imageDefault: '/assets/backgrounds/lines-secondary.png',
      alt: 'Background image'
    }

    const bgGrid = {
      imageMobile: '/assets/backgrounds/grid-mobile.webp',
      imageTablet: '/assets/backgrounds/grid-tablet.webp',
      imageDesktop: '/assets/backgrounds/grid.webp',
      imageDefault: '/assets/backgrounds/grid.png',
      alt: 'Background image'
    }

    const section1 = {
      heading: {
        tag: 'h2',
        firstLine: 'Unlock the',
        secondLine: 'Metaverse'
      },
      img: {
        imageMobile: '/assets/images/triangle-mobile.webp',
        imageDesktop: '/assets/images/triangle.webp',
        imageDefault: '/assets/images/triangle.png',
        alt: 'Triangle',
        lazy: false
      }
    }

    const section2 = {
      heading: {
        tag: 'h2',
        firstLine: 'What is this',
        secondLine: 'Buzzword'
      },
      img: {
        imageDesktop: '/assets/images/group.webp',
        imageDefault: '/assets/images/group.png',
        alt: 'Group',
        lazy: false
      }
    }

    const section3 = {
      bg: {
        ...bgSecondary,
        lazy: false
      }
    }

    return {
      section1,
      section2,
      section3,
      bgPrimary,
      bgSecondary,
      bgGrid
    }
  }
}
</script>
