<template>
  <div id="calculator-btn">
    <CalculatorBtnRow
      :buttons="['AC', '+/-', '%', '/']"
      :styleClass="'btn-style-1'"
      @inputText="onButtonClick"
    />
    <CalculatorBtnRow
      :buttons="[7, 8, 9, 'X']"
      :styleClass="'btn-style-2'"
      @inputText="onButtonClick"
    />
    <CalculatorBtnRow
      :buttons="[4, 5, 6, '-']"
      :styleClass="'btn-style-2'"
      @inputText="onButtonClick"
    />
    <CalculatorBtnRow
      :buttons="[1, 2, 3, '+']"
      :styleClass="'btn-style-2'"
      @inputText="onButtonClick"
    />
    <CalculatorBtnRow
      :buttons="[0, '.', '=']"
      :styleClass="'btn-style-2'"
      @inputText="onButtonClick"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import CalculatorBtnRow from "./CalculatorBtnRow.vue";
import { mapMutations } from "vuex";

@Component({
  components: {
    CalculatorBtnRow: Vue.extend(CalculatorBtnRow),
  },
  methods: mapMutations(["setResultText"]),
})
export default class CalculatorBtn extends Vue {
  @Emit()
  onButtonClick(text: string) {
    this.$store.commit("setResultText", text);
  }
}
</script>
