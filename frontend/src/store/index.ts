import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const operationList: string[] = [];
const resultList: string[] = [];
export const store = new Vuex.Store({
  state: {
    resultText: "",
    resultList,
    operationList,
    resetNumber: false,
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
        case "+":
        case "-":
        case "X":
        case "/":
          state.resultList.push(state.resultText);
          state.operationList.push(input);
          const resultListLength = state.resultList.length;
          state.resultText = state.resultList[resultListLength - 1];
          state.resetNumber = !state.resetNumber;
          break;
        default:
          break;
      }
    },
  },
  mutations: {
    setResultText(state, input) {
      if (state.resetNumber === true) {
        state.resultText = "";
        state.resetNumber = !state.resetNumber;
      }

      if (store.getters.isOperation(input)) {
        store.getters.mapOperation(input);
      } else {
        state.resultText += input;
      }
      console.log(state.resultText, input);
    },
  },
});
