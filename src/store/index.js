import Vuex from "vuex";
import Vue from "vue";

import imageSelection from "./modules/imageSelection";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    imageSelection,
  },
});

export default store;
