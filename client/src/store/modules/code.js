import * as types from '../mutation-types';
import fixtureService from '@/api/fixture';

const namespaced = true;

const state = {
  selectedFixturePath: '',
  code: ''
};

const getters = {
  code: state => state.code
};

const actions = {
  getCode({commit}, payload) {
    return fixtureService
      .getCode(payload.entry.path)
      .then(response => {
        commit(types.SET_SELECTED_FIXTURE_PATH, {
          path: payload.entry.path
        });
        commit(types.SET_CODE, {
          code: response.data
        });
        return response;
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error.message);
          console.error(error.response.data);
        }
        error.data = payload.entry.name;
        throw error;
      });
  }
};

const mutations = {
  [types.SET_CODE](state, payload) {
    state.code = payload.code;
  },
  [types.SET_SELECTED_FIXTURE_PATH](state, payload) {
    state.selectedFixturePath = payload.path;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
