import entriesService from '@/api/entries';
import * as types from '../mutation-types';
import {SHORTCUT, DIRECTORY, FIXTURE} from '@/components/Projects/Menu/Entry/types';

const namespaced = true;

const state = {
  entries: []
};

const getters = {
  entries: state => state.entries
};

const actions = {
  getEntries({commit}, payload) {
    return entriesService
      .get(payload.path)
      .then(response => {
        const entries = response.data.map(entry => {
          return {
            path: payload.path + PATH_SEP + entry,
            name: entry,
            isEditable: false,
            type: entry.endsWith(FIXTURE_FILE_SUFFIX) ? FIXTURE : DIRECTORY
          };
        });
        let backDirectoryExists = 0;
        if (payload.path.length) {
          entries.splice(0, 0, {
            path: payload.path.substring(0, payload.path.lastIndexOf(PATH_SEP)),
            name: '..',
            type: SHORTCUT
          });
          backDirectoryExists = 1;
        }
        commit(types.SET_ENTRIES, {
          entries
        });
        return entries.length - backDirectoryExists;
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error.message);
          console.error(error.response.data);
        }
        error.data = payload.path;
        throw error;
      });
  },
  createEntry({commit}, payload) {
    return entriesService
      .create(payload.entry)
      .then(response => {
        commit(types.ADD_ENTRY, {
          entry: {
            ...payload.entry,
            isEditable: false
          }
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
  },
  renameEntry({commit}, payload) {
    return entriesService
      .rename(payload.entry, payload.display)
      .then(response => {
        commit(types.SET_ENTRY_PATH, {
          index: payload.index,
          path: payload.entry.path.replace(new RegExp(`${payload.entry.name}$`), payload.display)
        });
        commit(types.SET_ENTRY_NAME, {
          index: payload.index,
          name: payload.display
        });
        response.data = payload.entry.name;
        return response;
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error.message);
          console.error(error.response.data);
        }
        error.data = payload.display;
        throw error;
      });
  },
  deleteEntry({commit, rootState}, payload) {
    return entriesService
      .remove(payload.entry.path)
      .then(response => {
        commit(types.REMOVE_ENTRY, payload.index);
        if (payload.entry.type === FIXTURE && rootState.code.selectedFixturePath === payload.entry.path) {
          commit('code/SET_SELECTED_FIXTURE_PATH', '', {root: true});
          commit('code/SET_CODE', '', {root: true});
        }
        response.data = payload.entry.name;
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
  [types.SET_ENTRIES](state, payload) {
    state.entries = payload.entries;
  },
  [types.ADD_ENTRY](state, payload) {
    state.entries.push(payload.entry);
  },
  [types.REMOVE_ENTRY](state, index) {
    state.entries.splice(index, 1);
  },
  [types.SET_ENTRY_PATH](state, payload) {
    const entry = state.entries[payload.index];
    entry.path = payload.path;
  },
  [types.SET_ENTRY_NAME](state, payload) {
    const entry = state.entries[payload.index];
    entry.name = payload.name;
  },
  [types.TOGGLE_ENTRY_EDITABLE](state, payload) {
    const entry = state.entries[payload.index];
    entry.isEditable = !entry.isEditable;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
