import Vue from 'vue';
import Vuex from 'vuex';
import entries from './modules/entries';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
  modules: {
    entries
  },
  strict: debug
});
