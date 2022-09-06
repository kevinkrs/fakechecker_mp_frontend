const mutations = {
  setStatement(state, payload) {
      state.text = payload
    },
    saveInferenceResult(state, result) {
      state.result = result
    }
  }

export default mutations;