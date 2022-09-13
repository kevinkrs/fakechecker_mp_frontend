const getters = {
    getStatement(state){
        return state.statement
    },
    getDate(state) {
        return state.statementdate
    },
    getInferenceResult(state){
        return state.result
    }
}

export default getters;