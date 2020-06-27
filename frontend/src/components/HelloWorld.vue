<template>
  <div id="container">
    <div class="input-group input-group-lg">
      <input type="text" disabled="true" class="form-control" placeholder="9980000" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container input {
  border-radius: 0px;
  text-align: right;
}
</style>
