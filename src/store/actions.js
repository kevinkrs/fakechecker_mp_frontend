
const actions =  {
    fetchStatement({ commit}, payload){
      commit('setStatement', payload)
    },
    saveInferenceResult( {commit}, payload){
      commit('saveInferenceResult', payload)
    }
}

export default actions;