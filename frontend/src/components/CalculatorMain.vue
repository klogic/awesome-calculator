<template>
  <div id="awesome-calculator-app" class="container">
    <CalculatorResult />
    <CalculatorBtn />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CalculatorResult from "./CalculatorResult.vue";
import CalculatorBtn from "./CalculatorBtn.vue";

@Component({
  components: {
    CalculatorResult,
    CalculatorBtn,
  },
})
export default class CalculatorMain extends Vue {
  @Prop() private msg!: number;
}
</script>
