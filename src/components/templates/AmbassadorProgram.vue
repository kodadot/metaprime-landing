<template>
<!-- Section 1 -->
<section>
  <Hero v-bind="section1" class="flex items-center xl:min-h-[34.25rem]">
    Are you excited about Web 30. <br>
    and MetaPrime’s role within it? <br>
    Become and ambassador!
  </Hero>
</section>
<!-- Section 1 -->

<!-- Section 2 -->
<section class="py-20">
  <div class="container">
    <Heading tag="h3" class="mb-16">
      WHO YOU ARE
    </Heading>
    <Content class="max-w-3xl mb-16">
      <ul class="space-y-4">
        <li>
          - Passionate about and believes in Kusama/Polkadot.
        </li>
        <li>
          - Eager to get more involved with the MetaPrime
          team and help the project grow.
        </li>
        <li>
          - Want access to the team building MetaPrime.
        </li>
        <li>
          - Are interested in networking with other
          people in the Polkadot community.
        </li>
        <li>
          - Are excited to impact the growth of the MetaPrime network.
        </li>
      </ul>
    </Content>
    <Heading tag="h3" class="mb-16">
      WHAT YOU WILL BE DOING
    </Heading>
    <Content class="max-w-3xl mb-16">
      <ul class="space-y-4">
        <li>
          - Create content by writing blogs or contributing to code and tutorials
        </li>
        <li>
          - Host meetups and present on behalf of MetaPrime
        </li>
        <li>
          - Represent your region in the community
        </li>
        <li>
          - Get support for initiatives that support the MetaPrime mission
        </li>
        <li>
          - Participate in regular update calls with other ambassadors
        </li>
      </ul>
    </Content>
    <Heading tag="h3" class="mb-16">
      AMBASSADOR BENEFITS
    </Heading>
    <Content class="max-w-3xl mb-16">
      <ul class="space-y-4">
        <li>
          <span class="text-primary">- Resources</span> —  you will have direct access to the
          MetaPrime team and leadership for guidance and support
        </li>
        <li>
          <span class="text-primary">- Networking</span> — access to private ambassador
          telegram group and regular calls with ambasadors
        </li>
        <li>
        <span class="text-primary">- Early access</span> — priority access and first-call
        to events, bounties, hackathon
        </li>
        <li>
        <span class="text-primary">- Swag & prizes</span> — earn exclusive ambassador
        swag for yourself and for any meetups you host
        </li>
      </ul>
    </Content>
    <Heading tag="h3" class="mb-16">
      HOW WILL AMBASSADORS <br>
      CONTRIBUTE TO THE <br>
      COMMUNITY
    </Heading>
    <Content class="max-w-3xl mb-16">
      <ul class="space-y-4">
        <li>
          - community engagement
        </li>
        <li>
          - project promotion
        </li>
        <li>
          - contirbute to growth
        </li>
        <li>
          - mentor others — keep others in loop
        </li>
        <li>
          - regular contributions
        </li>
      </ul>
    </Content>
    <Heading tag="h3" class="mb-16">
      We will support your <br>
      own initiatives that <br>
      you feel could benefit <br>
      the project
    </Heading>
    <Content class="max-w-3xl mb-16">
      <ul class="space-y-4">
        <li>
          - technical projects
        </li>
        <li>
          - translations
        </li>
        <li>
          - content
        </li>
        <li>
          - design
        </li>
        <li>
          - community
        </li>
      </ul>
    </Content>
    <Heading tag="h3" class="mb-16">
      HOW TO APPLY
    </Heading>
    <Content class="max-w-3xl mb-16">
      <ul class="space-y-4">
        <li>
          - submit application
        </li>
        <li>
          - interview with the team
        </li>
        <li>
          - become an apprentice ambassador
        </li>
        <li>
          - complete two tasks within the first month
        </li>
        <li>
          - advance to the full ambassador status
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
import Heading from '@/components/atoms/Heading'
import Content from '@/components/atoms/Content'
import Hero from '@/components/organisms/Hero'

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
        firstLine: 'Ambassador',
        secondLine: 'Program'
      },
      img: {
        url: '/assets/images/ambassador.png',
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
