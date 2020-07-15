<template>
  <div>
    <div v-if="buttons.length == 4" class="row" v-bind:class="styleClass">
      <div class="btn btn-input col" v-for="button in buttons" :key="button">
        <div v-on:click="$emit('inputText', button)">
          {{ button }}
        </div>
      </div>
    </div>
    <div v-if="buttons.length == 3" class="row " v-bind:class="styleClass">
      <div class="btn btn-input col-6" v-for="button in buttons.slice(0, 1)" :key="button">
        <div v-on:click="$emit('inputText', button)">
          {{ button }}
        </div>
      </div>
      <div class="btn btn-input col" v-for="button in buttons.slice(1)" :key="button">
        <div v-on:click="$emit('inputText', button)">
          {{ button }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class CalculatorBtnRow extends Vue {
  @Prop() private buttons!: [];
  @Prop() private styleClass!: string;
  checkCol6 = false;

  get colFormat() {
    if (this.buttons.length <= 3 && !this.checkCol6) {
      this.checkCol6 = true;
    }
    return {
      col: !this.checkCol6,
      "col-6": this.checkCol6,
    };
  }
}
</script>

<style scoped>
#calculator-btn .row .col:last-child div {
  background-color: #f59f0b;
}
#calculator-btn div {
  color: #e7e7e8;
  text-align: center;
}
#calculator-btn .row {
  height: 48px;
}
.btn-style-1 div {
  background-color: #424548;
}
.btn-style-2 div {
  background-color: #616264;
}
.btn-input {
  font-weight: 500;
  font-size: 20px;
  padding: 0px;
  border: 0px;
  border-radius: 0;
}
.btn-input div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 1px 1px #2f3236;
}
</style>
