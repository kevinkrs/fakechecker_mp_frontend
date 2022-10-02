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
    return state.author;
  },
  getInferenceResult(state) {
    return state.result;
  },
  getHistory(state) {
    return state.history;
  },
  getNews(state) {
    return state.news;
  },
  getCheckerInput(state) {
    return state.checkerInput;
  },
  getSimilarStatements(state) {
    return state.similarNews;
  },
  getWarning(state) {
    return state.warning;
  },
};

export default getters;