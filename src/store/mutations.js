const mutations = {
  setStatement(state, { statement, statementdate, statementurl, statementauthor }) {
    console.log(statement);
    console.log(statementdate);
    console.log(statementurl);
    console.log(statementauthor);
    state.statement = statement;
    state.statementdate = statementdate;
    state.statementurl = statementurl;
    state.statementauthor = statementauthor;
  },
  saveInferenceResult(state, data) {
    state.result = data;
  },
  saveToHistory(state, data) {
    state.history.push(data);
  },
};

export default mutations;
