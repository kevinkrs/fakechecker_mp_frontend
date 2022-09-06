
const actions =  {
    fetchSentence({ commit }, payload) {
      commit('setSentence', payload)
    },
}

export default actions;