<template>
  <div class="columns">
    <div class="column is-offset-4 is-2">
      <card
        :title="title1"
      >
        {{ content1 }}
      </card>
    </div>
    <div class="column is-2 is-offset-1">
      <card :title="title2"
      >
        {{ content2 }}
      </card>
    </div>
  </div>
</template>
<script lang="ts" >
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card
  }
})
export default class Columns extends Vue {
  @Prop() private title!: any;
  @Prop() private content!: any;
  @Prop() private title2!: any;
  @Prop() private content2!: any;
}
</script>
