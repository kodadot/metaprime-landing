<template>
  <section class="relative overflow-hidden h-[34.25rem] py-20 after:absolute after:top-0 after:left-0 after:bg-lines after:bg-no-repeat after:bg-cover after:w-full after:h-[37rem] after:-z-10">
    <div class="relative flex flex-col justify-center container h-full">
      <h2 class="font-semibold uppercase flex flex-col mb-6">
        <span class="text-secondary text-[5.125rem] leading-none">Unlock the</span>
        <span class="text-primary text-[5.625rem] leading-none">Metaverse</span>
      </h2>
      <p class="font-semibold text-2xl max-w-sm leading-normal">
        Your vehicle for exploring and
        building immersive realities.
      </p>
      <img class="absolute right-0 top-1/2 -translate-y-1/2" src="@/assets/images/triangle.png" alt="">
    </div>
  </section>
  <section class="relative py-20">
    <div class="relative flex flex-col justify-center container h-full">
      <h2 class="font-semibold uppercase flex flex-col mb-6">
        <span class="text-secondary text-[5.125rem] leading-none">What is this</span>
        <span class="text-primary text-[5.625rem] leading-none">Buzzword?</span>
      </h2>
      <p class="font-semibold text-2xl max-w-xl leading-normal">
        <span class="flex mb-4">
          noun | ˈmɛtəvɜː(ɹ)s/
        </span>

        A hypothetical future (counterpart or continuation of the) Internet, created by
        the convergence of virtually enhanced
        physical reality and physically persistent
        virtual space.
      </p>
      <img src="@/assets/images/group.png" class="absolute right-0 top-1/2 -translate-y-1/2" alt="Group of people" />
    </div>
  </section>
  <section class="relative overflow-hidden py-20 after:absolute after:top-0 after:left-0 after:bg-lines-secondary after:bg-no-repeat after:bg-cover after:w-full after:h-[37rem] after:-z-10">
    <div class="relative flex flex-col justify-center container h-full">
      <h2 class="font-semibold text-[5rem] leading-none uppercase mb-6">
        <span>An</span>
        <span class="text-primary">Experimental</span>,
        <span class="text-primary">Open</span>
        <span>Metaverse</span><br>
        <span class="text-primary">Blockchain</span>
      </h2>
    </div>
  </section>
  <section class="py-20">
    <div class="container mb-20">
      <MetaPrime class="mb-4" />
      <h2 class="font-semibold text-[5rem] text-primary leading-none uppercase mb-6">
        Diagram
      </h2>
      <Heading class="mb-16" tag="h3" light>
        WEB 3.0 TOOLBOX FOR <br>
        THE OPEN METAVERSE
      </Heading>
      <div class="flex items-center mb-10">
        <Woman class="mr-12" />
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
      <div class="mb-4">
        <Tag content="DeFi" />
        <Tag content="Liquidity Pools" />
        <Tag content="Self-sovereign identity" />
      </div>
      <div>
        <Tag content="Decentralized Governance" />
        <Tag content="Oracles" />
      </div>
    </div>
    <div class="container mb-28">
      <Heading class="mb-28" tag="h3" light>
        EXAMPLES OF WHAT <br>
        YOU WILL BE BUILDING:
      </Heading>
      <div class="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/minting-houses.png"
            alt="Minting Houses"
            class="mb-12"
            loading="lazy"
          >
          <Tag content="Minting Houses" />
        </div>
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/marketplaces.png"
            alt="Marketplaces"
            class="mb-12"
            loading="lazy"
          >
          <Tag content="Marketplaces" />
        </div>
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/token-standards.png"
            alt="Token Standards"
            class="mb-12"
            loading="lazy"
          >
          <Tag content="Token Standards" />
        </div>
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/metadata-standards.png"
            alt="Metadata Standards"
            class="mb-12"
            loading="lazy"
          >
          <Tag content="Metadata Standards" />
        </div>
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/hybrid-nfts.png"
            alt="Hybrid NFTs + FT"
            class="mb-12"
            loading="lazy"
          >
          <Tag content="Hybrid NFTs + FT" />
        </div>
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/physical-nfts.png"
            alt="Physical NFTs"
            class="mb-12"
            loading="lazy"
          >
          <Tag content="Physical NFTs" />
        </div>
      </div>
    </div>
    <div class="container mb-28">
      <Heading class="mb-16" tag="h3" light>
        WE WANT TO:
      </Heading>
      <div class="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col items-center justify-start">
          <img
            src="@/assets/images/person1.png"
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
            src="@/assets/images/person2.png"
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
    <div class="container mb-28">
      <Heading class="mb-16" tag="h3" light>
       ALLOW EASIER <br>
        ACCESS TO:
      </Heading>
      <div class="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/access1.png"
            alt="Enable everyone to participate in a programmable culture layer"
            class="mb-12"
            loading="lazy"
          >
          <Tag class="mb-3" content="In-game objects" />
          <Tag class="mb-3" content="Data assets" />
          <Tag class="mb-3" content="Composable Economies" />
        </div>
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/access2.png"
            alt="Enable everyone to participate in a programmable culture layer"
            class="mb-12"
            loading="lazy"
          >
          <Tag class="mb-3" content="VRM Based Avatars" />
          <Tag class="mb-3" content="Financial Instruments" />
          <Tag class="mb-3" content="Content" />
        </div>
        <div class="flex flex-col items-center justify-end">
          <img
            src="@/assets/images/access3.png"
            alt="Enable everyone to participate in a programmable culture layer"
            class="mb-12"
            loading="lazy"
          >
          <Tag class="mb-3" content="Space" />
          <Tag class="mb-3" content="Currency" />
          <Tag class="mb-3" content="Virtual Space" />
        </div>
      </div>
    </div>
      <div class="container">
      <Heading class="mb-16" tag="h3" light>
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
  <section class="relative overflow-hidden py-20 after:absolute after:top-0 after:left-0 after:bg-lines-secondary after:bg-no-repeat after:bg-cover after:w-full after:h-full after:-z-10">
    <div class="container">
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
    </div>
  </section>
</template>

<script>
import Heading from '@/components/atoms/Heading.vue'
import Tag from '@/components/atoms/Tag.vue'
import Content from '@/components/atoms/Content.vue'
import MetaPrime from '@/assets/images/meta-prime.svg'
import Woman from '@/assets/images/woman.svg'
export default {
  components: {
    Heading,
    Tag,
    Content,
    MetaPrime,
    Woman
  },
  setup () {


    return {}
  }
}
</script>
