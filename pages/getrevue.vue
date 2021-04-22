<template>
  <section class="hero is-black is-halfheight">
  <div class="columns">
    <div class="column is-3">
      <div id="revue-embed">
        <form action="https://www.getrevue.co/profile/metaprime/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
        <div class="revue-form-group">
          <label for="member_email">Email address</label>
          <b-input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"></b-input>
        </div>
        <!-- <div class="revue-form-group">
          <label for="member_first_name">First name <span class="optional">(Optional)</span></label>
          <input class="revue-form-field" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name">
        </div>
        <div class="revue-form-group">
          <label for="member_last_name">Last name <span class="optional">(Optional)</span></label>
          <input class="revue-form-field" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name">
        </div> -->
        <div class="revue-form-actions">
          <b-input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"></b-input>
        </div>
        <div class="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
        </form>
      </div>
    </div>
    <div class="column is-offset-3 is-3">
      <iframe
        src="https://nft.kodadot.xyz/rmrk/detail/7152905-0E76E3AC15B4C1FA1E-TRI-SIERPINSKI_TETRAHEDRON-0000000000000001"
        title="Check this cool NFT on #KusamaNetwork #KodaDot"
        style="width:480px;height:840px;border:none;"
      ></iframe>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'hero',
}
</script>
