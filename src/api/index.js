/* eslint-disable */
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export function getPrediction({ statement, statementdate, statementurl }) {
  console.log(statement);
  return axios.post(`/api/predict`, {
    text: statement,
    statementdate: statementdate,
    source: statementurl,
  });


}
