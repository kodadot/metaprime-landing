<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        icon="github"
      >
        Metaprime <a href="https://metaprime.network">
          GitHub
        </a>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>
      - mission
      # community-driven & community-owned
      - we embrace steward ownership model
      # interoperable
      - we favour interoperable NFT standards

      # native NFT experimental ecosystem
      - we want to be experimental NFT landscape for low velocity appraisal assets

      why metaprime

      roadmap coming soonp
      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card
        title="Lightweight"
        icon="arrange-bring-to-front"
      >
        No other internal dependency
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'index',

  components: {
    Card
  }
}
</script>
