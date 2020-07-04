import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    resultText: "",
  },
  getters: {
    isOperation: state => (input: string) => {
      return !Number(input);
    },
    reversePositiveNegative: state => (input: string) => {
      const convertNumber = Number(input);
      return -convertNumber;
    },
    mapOperation: state => (input: string) => {
      switch (input) {
        case "AC":
          state.resultText = "";
          break;
        case "+/-":
          state.resultText = store.getters.reversePositiveNegative(state.resultText);
          break;
        default:
          break;
      }
    },
  },
  mutations: {
    setResultText(state, input) {
      if (store.getters.isOperation(input)) {
        store.getters.mapOperation(input);
      } else {
        state.resultText += input;
      }
      console.log(state.resultText, input);
    },
  },
});
