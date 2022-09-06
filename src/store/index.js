/* eslint-disable */ 
import { createApp } from 'vue'
import { createStore } from 'vuex'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    sentence: '',
    url: '',
    author: '',
    debug: 'Debug works'
  },
  mutations: {
    setSentence(state, payload) {
      state.sentence = payload
  },

  },
  actions: {
    fetchSentence({ commit }, payload) {
       commit('setSentence', payload)
    },

    setUrl({commit }, inputUrl){
      state.url = inputUrl
    },

    setAuthor({ commit }, inputAuthor){

    },
},
})

export default store;