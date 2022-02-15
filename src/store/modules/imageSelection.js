const state = {
  notRealImages: [],
  features: [
    "Background",
    "Eyes",
    "Nose",
    "Hair",
    "Mouth",
    "Ears",
    "Jewellery",
  ],
  reportByFeatures: {},
};

const actions = {
  setNotRealImage({ commit }, data) {
    commit("setNotRealImage", data);
  },
  removeNotRealImage({ commit }, data) {
    commit("removeNotRealImage", data);
  },
  setOwnFeature({ commit }, data) {
    commit("setOwnFeature", data);
  },
};

const mutations = {
  setNotRealImage(state, data) {
    state.notRealImages.push(data);
  },
  removeNotRealImage(state, data) {
    const index = state.notRealImages.findIndex((item) => item.id === data);
    state.notRealImages.splice(index, 1);
  },
  setOwnFeature(state, data) {
    state.features.push(data);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
