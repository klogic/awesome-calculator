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
import { store } from "../store/index";

@Component({
  components: {
    CalculatorBtnRow,
  },
  store,
  methods: {
    setResultText(text) {
      this.$store.commit("setResultText", text);
    },
  },
})
export default class CalculatorBtn extends Vue {
  @Emit()
  onButtonClick(text) {
    this.setResultText(text);
  }
}
</script>
