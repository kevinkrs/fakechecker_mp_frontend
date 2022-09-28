const mutations = {
  setStatement(state, { statement, statementdate, statementurl, author }) {
    console.log(statement);
    console.log(statementdate);
    console.log(statementurl);
    state.statement = statement;
    state.statementdate = statementdate;
    state.statementurl = statementurl;
    state.author = author;
  },
  saveInferenceResult(state, data) {
    state.result = data;
  },
  saveSimilarNews(state, data) {
    state.similarNews = data;
  },
  saveToHistory(state, data) {
    state.history.push(data);
  },
  saveToNews(state, data) {
    state.news = data;
  },
  saveForChecker(state, data) {
    state.checkerInput = data;
  },
};

export default mutations;
