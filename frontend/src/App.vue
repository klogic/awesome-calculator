<template>
  <div id="app">
    <CalculatorMain />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CalculatorMain from "./components/CalculatorMain.vue";

@Component({
  components: {
    CalculatorMain,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
