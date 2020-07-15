import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const inputList: string[] = [];
const calculationString = "";
function clearState() {
  return {
    resultText: "",
    inputList: [],
    resetNumber: false,
    calculationString,
  };
}
function initialState() {
  return {
    resultText: "",
    inputList,
    resetNumber: false,
    calculationString,
  };
}

export const store = new Vuex.Store({
  state: initialState(),
  getters: {
    isOperation: state => (input: string) => {
      return isNaN(Number(input));
    },
    reversePositiveNegative: state => (input: string) => {
      const convertNumber = Number(input);
      return -convertNumber;
    },
    mapOperation: state => (input: string) => {
      const inputListLength = state.inputList.length;
      let resultPercent = null;
      switch (input) {
        case "AC":
          store.commit("clearAllState");
          break;
        case "+/-":
          state.resultText = store.getters.reversePositiveNegative(state.resultText);
          store.commit("removeFromCalculationString", state.resultText);
          break;
        case "%":
          resultPercent = Number(state.resultText) / 100;
          state.resultText = String(resultPercent);
          state.calculationString = state.resultText;
          break;
        case ".":
          if (String(state.resultText).indexOf(".") === -1) {
            store.commit("addToCalculationString", input);
            state.resultText += input;
          }
          break;
        case "+":
        case "-":
        case "X":
        case "/":
          if (input == "X") {
            input = "*";
          }
          store.commit("addToCalculationString", input);
          state.resultText = state.inputList[inputListLength - 1];
          state.resetNumber = !state.resetNumber;
          break;
        default:
        case "=":
          store.commit("calculateResult");
          break;
      }
    },
  },
  mutations: {
    removeFromCalculationString(state, input: string) {
      const inputLength = String(input).length;
      const originalLenght = state.calculationString.length;
      state.calculationString = state.calculationString.slice(0, -inputLength);
      store.commit("addToCalculationString", input);
    },
    addToCalculationString(state, input) {
      state.calculationString += input;
    },
    calculateResult(state) {
      const result = eval(state.calculationString);
      state.resultText = result;
    },
    setResultText(state, input) {
      if (state.resetNumber === true) {
        state.resultText = "";
        state.resetNumber = !state.resetNumber;
      }
      if (store.getters.isOperation(input)) {
        store.getters.mapOperation(input);
      } else {
        state.resultText += input;
        state.calculationString += input;
      }
    },
    clearAllState(state) {
      Object.assign(state, clearState());
    },
  },
});
