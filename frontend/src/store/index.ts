import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const operationList: string[] = [];
const inputList: string[] = [];
let calculationString = "";

export const store = new Vuex.Store({
  state: {
    resultText: "",
    inputList,
    operationList,
    resetNumber: false,
    calculationString,
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
            state.inputList.push(state.resultText);
          }
          state.operationList.push(input);
          state.resultText = state.inputList[inputListLength - 1];
          state.resetNumber = !state.resetNumber;
          break;
        default:
        case "=":
          if (state.resultText) {
            state.inputList.push(state.resultText);
          }
          inputList.forEach((item, index) => {
            console.log("item", item);
            calculationString += item + operationList?.[index] || null;
          });
          console.log("input List is ", calculationString);
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
    },
    clearAllState(state) {
      state.resultText = "";
      state.inputList = [];
      state.operationList = [];
      state.resetNumber = false;
      state.calculationString = "";
      console.log("state.resultText", state.resultText);
      console.log("state.inputList", state.inputList);
      console.log("state.operationList", state.operationList);
    },
  },
});
