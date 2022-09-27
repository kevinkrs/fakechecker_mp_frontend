/* eslint-disable */
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export function getPrediction({ statement, statementdate, statementurl }) {
  return axios.post(`/predict`, {
    text: statement,
    statementdate: statementdate,
    source: statementurl,
  });
}

export function getNews() {
  return axios.get('/news');
}