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
      let reverseResult = null;
      switch (input) {
        case "AC":
          store.commit("clearAllState");
          break;
        case "+/-":
          reverseResult = store.getters.reversePositiveNegative(state.resultText);
          store.commit("setFixedResultText", reverseResult);
          store.commit("removeFromCalculationString", reverseResult);
          break;
        case "%":
          resultPercent = String(Number(state.resultText) / 100);
          store.commit("setFixedResultText", resultPercent);
          store.commit("addToCalculationString", resultPercent);
          break;
        case ".":
          if (String(state.resultText).indexOf(".") === -1) {
            store.commit("addToCalculationString", input);
            store.commit("addToResultText", input);
          }
          break;
        case "+":
        case "-":
        case "X":
        case "/":
          if (input == "X") {
            input = "*";
          }
          if (
            Number(
              state.calculationString.slice(
                state.calculationString.length - 1,
                state.calculationString.length,
              ),
            )
          ) {
            store.commit("addToCalculationString", input);
            store.commit(
              "setFixedResultText",
              state.calculationString.slice(0, state.calculationString.length - 1),
            );
            state.resetNumber = !state.resetNumber;
          }
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
    addToResultText(state, input) {
      state.resultText += input;
    },
    setFixedResultText(state, input) {
      console.log("setFixresultText", input);
      state.resultText = input;
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
