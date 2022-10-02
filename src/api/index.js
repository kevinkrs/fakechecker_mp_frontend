/* eslint-disable */
import axios from 'axios';


axios.defaults.baseURL = 'https://fakechecker-api.rath.consulting/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export function getPrediction({ statement, statementdate, statementurl, author }) {
  return axios.post(`/predict`, {
    text: statement,
    statementdate: statementdate,
    source: statementurl,
    author: author,
  });
}

export function getSimilarNews({ statement, statementdate, statementurl, author }) {
  return axios.post(`/search`, {
    text: statement,
    statementdate: statementdate,
    source: statementurl,
    author: author,
  });
}


export function postUserHistory({ statement, statementdate, statementurl, author, results }) {
  return axios.post('/training', {
    text: statement,
    statementdate: statementdate,
    source: statementurl,
    author: author,
    results: results,
  });
}