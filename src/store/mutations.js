const mutations = {
  setStatement(state, { statement, statementdate }) {
    console.log(statement);
    console.log(statementdate);
    state.statement = statement;
    state.statementdate = statementdate;
  },
  saveInferenceResult(state, data) {
    state.result = data;
  },
  saveToHistory(state, data) {
    state.history.push(data);
  },
};

export default mutations;