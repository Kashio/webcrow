import entriesService from '../../api/entries';
import entryService from '../../api/entry';
import * as types from '../mutation-types';
import config from '../../app.config';

const state = {
  entries: []
};

const getters = {
  entries: state => state.entries
};

const actions = {
  getEntries({ commit }, vm) {
    entriesService(vm)
      .get(vm.path)
      .then(response => {
        commit(types.SET_ENTRIES, response.data.map(entry => {
          return {
            name: entry,
            isEditable: false
          };
        }));
      })
      .catch(error =>
        vm.$toast({
          message: 'error getting entries. ' + error.body,
          ...config.toastFailure
        }));
  },
  createEntry({ commit }, vm) {
    entryService(vm)
      .create(vm.newEntry)
      .then(response => {
        commit(types.ADD_ENTRY, {
          path: this.newEntry,
          isEditable: false
        });
        this.$toast({
          message: response.body,
          ...config.toastSuccess
        });
      })
      .catch(error =>
        this.$toast({
          message: error.body,
          ...config.toastFailure
        }));
  }
};

const mutations = {
  [types.SET_ENTRIES](state, entries) {
    state.entries = entries;
  },
  [types.ADD_ENTRY](state, entry) {
    state.entries.push(entry);
  },
  [types.REMOVE_ENTRY](state, index) {
    state.entries.splice(index, 1);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
