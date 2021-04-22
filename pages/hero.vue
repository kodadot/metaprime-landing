<template>
  <section class="hero is-black is-fullheight is-centered">
    <div class="hero-body has-text-centered">
      <div class="container">
        <div class="box has-background-black">

            <p class="title">
              <img src="@/assets/metaprime-whitefg.png" alt="metaprime - experimental nft landscape">
            </p>
            <br>
            <p class="subtitle">
              <b-notification :closable="false" class="is-dark">
                Experimental NFT-focused infrastructure, to provide streamline signals for highly illiquid goods with low-velocity appraisal
              </b-notification>
            </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero',
}
</script>
