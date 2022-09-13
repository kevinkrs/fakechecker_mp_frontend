
import { getPrediction } from '@/api'

const actions =  {
    async fetchStatement({ commit}, payload) {
      commit('setStatement', payload)
      await getPrediction(payload)
      .then((resp) => commit('saveInferenceResult', resp))
    },
}

export default actions;