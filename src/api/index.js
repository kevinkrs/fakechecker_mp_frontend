/* eslint-disable */
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export function getPrediction({ statement, statementdate, statementurl, author }) {
  return axios.post(`/predict`, {
    text: statement,
    statementdate: statementdate,
    source: statementurl,
    author: author,
  });
}

export function getNews() {
  return axios.get('/news');
}

export function postUserHistory(history) {
  return axios.post('/training', {
    input: history,
  });
}