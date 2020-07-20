<template>
  <div id="result" class="row">
    <div class="input-group input-group-lg">
      <input type="text" disabled="true" class="form-control" :value="getResultText" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  computed: {
    getResultText() {
      return this.$store.state.resultText || 0;
    },
  },
})
export default class CalculatorResult extends Vue {}
</script>

<style scoped>
#result input {
  border-radius: 0px;
  text-align: right;
  font-size: 50px;
  height: 58px;
  background-color: #2e3134;
  border-color: #2e3134;
}
#result input::placeholder {
  color: #f9f9f9;
}
</style>
