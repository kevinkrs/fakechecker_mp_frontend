const getters = {
  getStatement(state) {
    return state.statement;
  },
  getDate(state) {
    return state.statementdate;
  },
  getUrl(state) {
    return state.statementurl;
  },
  getAuthor(state) {
    return state.statementauthor;
  },
  getInferenceResult(state) {
    return state.result;
  },
  getHistory(state) {
    return state.history;
  },
};

export default getters;