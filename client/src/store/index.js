import Vue from 'vue';
import Vuex from 'vuex';
import path from './modules/path';
import entries from './modules/entries';
import code from './modules/code';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
  modules: {
    path,
    entries,
    code
  },
  strict: debug
});
