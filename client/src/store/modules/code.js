import * as types from '../mutation-types';

const namespaced = true;

const state = {
  path: ''
};

const getters = {
  path: state => state.path,
  pathDirectories: state => state.path.split('/')
};

const actions = {};

const mutations = {
  [types.SET_PATH](state, payload) {
    state.path = payload.path + PATH_SEP;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
