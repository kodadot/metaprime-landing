<template>
  <section class="hero is-light is-halfheight">
  <div class="hero-body has-text-centered">
  <div class="container">
    <div class="columns">
      <div class="column is-offset-3 is-6">

  <div class="box has-background-light">
      <div id="revue-embed">
        <form action="https://www.getrevue.co/profile/metaprimenetwork/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
        <div class="form">
          <b-field label="e-mail address" label-position="on-border">
          <b-input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" expanded></b-input>
          <p class="control">
            <b-input class="" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
              Subscribe
            </b-input>
          </p>
          </b-field>
          <div class="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <iframe
        src="https://nft.kodadot.xyz/rmrk/detail/7152905-0E76E3AC15B4C1FA1E-TRI-SIERPINSKI_TETRAHEDRON-0000000000000001"
        title="Check this cool NFT on #KusamaNetwork #KodaDot"
        style="width:480px;height:840px;border:none;"
      ></iframe>
    </div>
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
