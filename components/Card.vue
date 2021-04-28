<template>
  <div class="column">
    <header class="card-header">
      <p class="card-header-title has-text-grey-darker has-background-light">
        {{ title }}
      </p>
    </header>
    <!-- <div class="card-content has-text-grey-light has-background-dark">
      <div class="content has-text-centered has-text-grey-light has-background-dark">
        <slot />
      </div>
    </div> -->
    <footer class="card-footer">
      <div class="card-footer-item has-text-grey-light has-background-dark">
        <span>
          <slot />
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
