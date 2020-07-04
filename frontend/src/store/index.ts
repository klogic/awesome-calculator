import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    resultText: "",
  },
  getters: {
    isOperation: state => (input: string) => {
      return !!Number(input);
    },
  },
  mutations: {
    setResultText(state, input) {
      if (store.getters.isOperation(input)) {
        state.resultText += input;
      }
      console.log(state.resultText, input);
    },
  },
});
