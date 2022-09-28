/* eslint-disable */
import { createApp } from 'vue';
import { createStore } from 'vuex';

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import state from './state';
import actions from './actions';
import getters from './getters';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
      createPersistedState({ storage: window.sessionStorage }),
  ],
  modules: {},
  actions,
  mutations,
  state,
  getters,
});

export default store;
