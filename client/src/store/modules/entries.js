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
            path: entry,
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
          name: vm.newEntry,
          isEditable: false
        });
        vm.$toast({
          message: response.body,
          ...config.toastSuccess
        });
      })
      .catch(error =>
        vm.$toast({
          message: error.body,
          ...config.toastFailure
        }));
  },
  deleteEntry({ commit }, vm) {
    entryService(vm)
      .remove(vm.entry.name)
      .then(response => {
        commit(types.REMOVE_ENTRY, vm.entryIndex);
        vm.$toast({
          message: response.body,
          ...config.toastSuccess
        });
      })
      .catch(error =>
        vm.$toast({
          message: error.body,
          ...config.toastFailure
        }));
  },
  renameEntry({ commit }, vm) {
    entryService(vm)
      .rename(vm.entry.path, vm.entry.name)
      .then(response => {
        commit(types.RENAME_ENTRY, {
          index: vm.entryIndex,
          name: vm.entry.name
        });
        vm.$toast({
          message: response.body,
          ...config.toastSuccess
        });
      })
      .catch(error =>
        vm.$toast({
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
  },
  [types.RENAME_ENTRY](state, args) {
    const entry = state.entries[args.index];
    entry.path = entry.name = args.name;
  },
  [types.SET_ENTRY_NAME](state, args) {
    const entry = state.entries[args.index];
    entry.name = args.name;
  },
  [types.TOGGLE_ENTRY_EDITABLE](state, index) {
    const entry = state.entries[index];
    entry.isEditable = !entry.isEditable;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
