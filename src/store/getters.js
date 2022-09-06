const getters = {
    getStatement(state){
        return state.text
    },
    getInferenceResult(state){
        return state.result
    }
}

export default getters;