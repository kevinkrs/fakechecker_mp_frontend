import axios from "axios";
import store from "@/store";


const axios = require('axios');
BASE_URL = '1'

function getPrediction(){
    return axios.post(`${BASE_URL}/api/predict`, {
        sentence: this.$state.getters['getSentence']
        }
    )
    .then((resp) => this.$state.dispatch("saveInference", resp))
}