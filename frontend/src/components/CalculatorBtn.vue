<template>
  <div id="calculator-btn">
    <CalculatorBtnRow :buttons="['AC', '+/-', '%', '/']" :styleClass="'btn-style-1'" />
    <CalculatorBtnRow :buttons="[7, 8, 9, 'X']" :styleClass="'btn-style-2'" />
    <CalculatorBtnRow :buttons="[4, 5, 6, '-']" :styleClass="'btn-style-2'" />
    <CalculatorBtnRow :buttons="[1, 2, 3, '+']" :styleClass="'btn-style-2'" />
    <CalculatorBtnRow :buttons="[0, '.', '=']" :styleClass="'btn-style-2'" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CalculatorBtnRow from "./CalculatorBtnRow.vue";

@Component({
  components: {
    CalculatorBtnRow,
  },
})
export default class CalculatorBtn extends Vue {}
</script>
