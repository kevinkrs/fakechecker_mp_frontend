
const actions =  {
    fetchStatement({ commit }, payload) {
      commit('setStatement', payload)
    },
    fetchInference({ commit }, value) {
      commit('saveInferenceResult', value )
    }
}

export default actions;