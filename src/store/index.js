/* eslint-disable */ 
import { createApp } from 'vue'
import { createStore } from 'vuex'

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from "./state"
import actions from "./actions"
import getters from "./getters"
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  // plugins: [
  //  createPersistedState({
  //   getState: (key) => Cookies.getJSON(key),
  //   setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
  //  })

  // ],
  modules: {},
  actions,
  mutations,
  state,
  getters,
})

export default store;