const mutations = {
  setStatement(state, {statement, statementdate}) {
    console.log(statement)
    console.log(statementdate)
      state.statement = statement
      state.statementdate = statementdate
    },
    saveInferenceResult(state, result) {
      state.result = result
    },
  }

export default mutations;