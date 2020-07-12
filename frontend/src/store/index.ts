import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const inputList: string[] = [];
const previousText = "";
const calculationString = "";
function clearState() {
  return {
    resultText: "",
    inputList: [],
    resetNumber: false,
    calculationString,
    previousText: "",
  };
}
function initialState() {
  return {
    resultText: "",
    inputList,
    resetNumber: false,
    calculationString,
    previousText,
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
      switch (input) {
        case "AC":
          store.commit("clearAllState");
          break;
        case "+/-":
          state.resultText = store.getters.reversePositiveNegative(state.resultText);
          state.previousText = state.resultText;
          store.commit("removeFromCalculationString", state.previousText);
          // store.commit("addToCalculationString", state.resultText);
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
      console.log("input", input);
      console.log("original", state.calculationString);
      const inputLength = String(input).length;
      const originalLenght = state.calculationString.length;
      console.log("before", state.calculationString);
      state.calculationString = state.calculationString.substring(inputLength, originalLenght);
      store.commit("addToCalculationString", state.resultText);
      console.log("after", state.calculationString);
    },
    addToCalculationString(state, input) {
      state.calculationString += input;
      console.log(state.calculationString);
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
      console.log("state[key]", state);
    },
  },
});
