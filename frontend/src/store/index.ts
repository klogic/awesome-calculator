import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const operationList: string[] = [];
const inputList: string[] = [];
const calculationString = "";
function clearState() {
  return {
    resultText: "",
    inputList: [],
    operationList: [],
    resetNumber: false,
    calculationString,
  };
}
function initialState() {
  return {
    resultText: "",
    inputList,
    operationList,
    resetNumber: false,
    calculationString,
  };
}

export const store = new Vuex.Store({
  state: initialState(),
  getters: {
    isOperation: state => (input: string) => {
      return !Number(input);
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
          break;
        case "+":
        case "-":
        case "X":
        case "/":
          if (state.resultText) {
            store.commit("pushInputList", state.resultText);
          }
          store.commit("pushOperationList", input);
          state.resultText = state.inputList[inputListLength - 1];
          state.resetNumber = !state.resetNumber;
          break;
        default:
        case "=":
          if (state.resultText) {
            store.commit("pushInputList", state.resultText);
          }
          store.commit("calculateResult");
          break;
      }
    },
  },
  mutations: {
    calculateResult(state) {
      console.log(state.inputList, "inputList");
      state.inputList.forEach((item, index) => {
        state.calculationString += item + (state.operationList[index] || "");
      });
    },
    pushOperationList(state, input) {
      state.operationList.push(input);
    },
    pushInputList(state, input) {
      state.inputList.push(input);
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
      }
    },
    clearAllState(state) {
      Object.assign(state, clearState());
      console.log("state[key]", state);
    },
  },
});
