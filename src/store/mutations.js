const mutations = {
  setStatement(state, { statement, statementdate, statementurl }) {
    console.log(statement);
    console.log(statementdate);
    console.log(statementurl);
    state.statement = statement;
    state.statementdate = statementdate;
    state.statementurl = statementurl;
  },
  saveInferenceResult(state, data) {
    state.result = data;
  },
  saveToHistory(state, data) {
    state.history.push(data);
  },
  saveToNews(state, data) {
    state.news = data;
  },
};

export default mutations;
