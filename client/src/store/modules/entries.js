import entriesService from '../../api/entries';
import * as types from '../mutation-types';
import config from 'config';
import {SHORTCUT, DIRECTORY, TEST} from '@/components/Projects/Menu/Entry/types';

const namespaced = true;

const state = {
  entries: []
};

const getters = {
  entries: state => state.entries
};

const actions = {
  setEntries({commit}, payload) {
    return entriesService
      .get(payload.path)
      .then(response => {
        const entries = response.data.map(entry => {
          return {
            path: payload.path + PATH_SEP + entry,
            name: entry,
            isEditable: false,
            type: entry.endsWith(TEST_FILE_SUFFIX) ? TEST : DIRECTORY
          };
        });
        if (payload.path.length) {
          entries.splice(0, 0, {
            path: payload.path.substring(0, payload.path.lastIndexOf(PATH_SEP)),
            name: '..',
            type: SHORTCUT
          });
        }
        commit(types.SET_ENTRIES, {
          entries
        });
        return entries.length;
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error.message);
        }
        throw error;
      });
  },
  createEntry({commit}, payload) {
    return entriesService
      .create(payload.path + payload.entry.name)
      .then(response => {
        commit(types.ADD_ENTRY, {
          entry: {
            path: payload.path + payload.entry.name,
            name: payload.entry.name,
            type: payload.entry.type,
            isEditable: false
          }
        });
        return response;
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error.message);
        }
        throw error;
      });
  },
  renameEntry({commit}, payload) {
    return entriesService
      .rename(payload.entry.path, payload.display)
      .then(response => {
        commit(types.SET_ENTRY_PATH, {
          index: payload.index,
          path: payload.entry.path.replace(new RegExp(`${payload.entry.name}$`), payload.display)
        });
        commit(types.SET_ENTRY_NAME, {
          index: payload.index,
          name: payload.display
        });
        return response;
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error.message);
        }
        throw error;
      });
  },
  deleteEntry({commit}, payload) {
    entriesService
      .remove(payload.entry.path)
      .then(response => {
        commit(types.REMOVE_ENTRY, payload.index);
        return response;
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error.message);
        }
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
