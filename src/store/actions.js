const actions = {
  fetchStatement({ commit }, payload) {
    commit('setStatement', payload);
  },
  saveInferenceResult({ commit }, payload) {
    commit('saveInferenceResult', payload);
  },
  saveHistory({ commit }, payload) {
    commit('saveToHistory', payload);
  },
};

export default actions;