const getters = {
  getStatement(state) {
    return state.statement;
  },
  getDate(state) {
    return state.statementdate;
  },
  getInferenceResult(state) {
    return state.result;
  },
  getHistory(state) {
    return state.history;
  },
  getUrl(state) {
    return state.statementurl;
  },
};

export default getters;
