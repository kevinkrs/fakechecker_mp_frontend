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
  saveNews({ commit }, payload) {
    commit('saveToNews', payload);
  },
  fetchForChecker({ commit }, payload) {
    commit('saveForChecker', payload);
  },
};

export default actions;