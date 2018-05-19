<template>
  <div class="entry pointer" @dblclick="onEntryDoubleClick" @click="onEntryClick">
    <i v-if="!isShortcutEntry()" class="fa fa-trash-o" @click="showDeleteEntryModal"></i>
    <i v-if="!isShortcutEntry()" class="fa fa-pencil" @click="toggleEditable({index})"></i>
    <i v-if="isFixtureEntry()" class="fa fa-registered" @click="toggleEditable({index})"></i>
    <i class="fa" :class="getEntryIconClass()"></i>
    <input class="project-name pointer"
           v-truncated-title
           :readonly="!entry.isEditable"
           v-focus-toggle="entry.isEditable"
           @blur="renameEntry"
           @keyup.enter="onEntryNameInputEnter"
           v-model="display"/>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import config from 'config';
  import {SHORTCUT, DIRECTORY, FIXTURE} from './types';

  const entryTypeIconMap = {
    SHORTCUT: 'fa-folder-o',
    DIRECTORY: 'fa-folder-o',
    FIXTURE: 'fa-file-code-o'
  };

  export default {
    name: 'Entry',
    props: {
      entry: {
        validator: entry => {
          return entry &&
            entry.path !== undefined &&
            entry.name !== undefined &&
            entry.type !== undefined;
        }
      },
      index: {
        type: Number,
        required: true
      }
    },
    data() {
      const name = this.entry.name;
      return {
        display: name.replace(new RegExp(`${FIXTURE_FILE_SUFFIX}$`), '')
      };
    },
    methods: {
      getEntryIconClass() {
        return entryTypeIconMap[this.entry.type];
      },
      isShortcutEntry() {
        return this.entry.type === SHORTCUT;
      },
      isFixtureEntry() {
        return this.entry.type === FIXTURE;
      },
      onEntryDoubleClick() {
        if (this.entry.type !== FIXTURE) {
          this.$store.commit('path/SET_PATH', {
            path: this.entry.path
          });
          this
            .$store
            .dispatch('entries/getEntries', {
              path: this.entry.path
            })
            .then(numberOfEntries => {
              if (numberOfEntries > 0) {
                this.$toast({
                  message: `Successfully loaded ${numberOfEntries} ${numberOfEntries === 1 ? 'entry' : 'entries'}`,
                  ...config.toast.success
                });
              }
            })
            .catch(() => {
              this.$toast({
                message: 'Error loading entries',
                ...config.toast.failure
              });
            });
        }
      },
      onEntryClick() {
        if (this.isFixtureEntry()) {
          this
            .$store
            .dispatch('code/getCode', {
              entry: this.entry
            })
            .catch(error => {
              this.$toast({
                message: `Error loading code for test "${error.data.replace(new RegExp(`${FIXTURE_FILE_SUFFIX}$`), '')}"`,
                ...config.toast.failure
              });
            });
        }
      },
      showDeleteEntryModal() {
        this.$modal.show('dialog', {
          text: `You are about to delete ${this.entry.type.toLowerCase()} <b>${this.entry.name.replace(new RegExp(`${FIXTURE_FILE_SUFFIX}$`), '')}</b>`,
          class: 'app-modal',
          buttons: [
            {
              title: 'Confirm',
              default: true,
              handler: () => {
                this.deleteEntry();
                this.hideDeleteEntryModal();
              }
            },
            {
              title: 'Close'
            }
          ]
        });
      },
      hideDeleteEntryModal() {
        this.$modal.hide('dialog');
      },
      deleteEntry() {
        this
          .$store
          .dispatch('entries/deleteEntry', {
            entry: this.entry,
            index: this.index
          })
          .then(response => {
            this.$toast({
              message: `Successfully deleted ${this.entry.type.toLowerCase()} "${response.data.replace(new RegExp(`${FIXTURE_FILE_SUFFIX}$`), '')}"`,
              ...config.toast.success
            });
          })
          .catch(error => {
            this.$toast({
              message: `Error deleting ${this.entry.type.toLowerCase()} "${error.data.replace(new RegExp(`${FIXTURE_FILE_SUFFIX}$`), '')}"`,
              ...config.toast.failure
            });
          });
      },
      onEntryNameInputEnter(e) {
        if (e.keyCode === 13) {
          e.target.blur();
          this.renameEntry();
        }
      },
      renameEntry() {
        if (this.entry.isEditable) {
          if (this.display !== this.entry.name) {
            if (this.display.length > 0) {
              const oldName = this.entry.name.replace(new RegExp(`${FIXTURE_FILE_SUFFIX}$`), '');
              this
                .$store
                .dispatch('entries/renameEntry', {
                  entry: this.entry,
                  display: this.display,
                  index: this.index
                })
                .then(response => {
                  this.$toast({
                    message: `Successfully renamed ${this.entry.type.toLowerCase()} "${oldName}" to "${response.data}"`,
                    ...config.toast.success
                  });
                })
                .catch(error => {
                  this.display = this.entry.name;
                  this.$toast({
                    message: `Error renaming ${this.entry.type.toLowerCase()} "${oldName}" to "${error.data}"`,
                    ...config.toast.failure
                  });
                });
            } else {
              this.display = this.entry.name;
            }
          }
          this.toggleEditable({
            index: this.index
          });
        }
      },
      ...mapMutations('entries', {
        toggleEditable: 'TOGGLE_ENTRY_EDITABLE'
      })
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  $input-border-color: #969696;
  $input-border-color-focus: #c9c9c9;
  $new-entry-button-font-color: #c9c9c9;
  $project-color: #797979;
  $project-hover-background-color: #121212;
  $project-hover-color: #a0a0a0;
  $record-hover-color: #b03434;

  .entry {
    &:hover {
      .fa-trash-o {
        &:hover {
          color: $project-hover-color;
        }
        display: inline;
        color: $project-color;
      }
      .fa-pencil {
        &:hover {
          color: $project-hover-color;
        }
        display: inline;
        color: $project-color;
      }
      .fa-registered {
        &:hover {
          color: $record-hover-color;
        }
        display: inline;
        color: $project-color;
      }
      background-color: $project-hover-background-color;
      color: $project-hover-color;
    }
    .project-name {
      background-color: inherit;
      color: inherit;
      border: none;
      outline: none;
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .fa-trash-o {
      display: none;
      position: absolute;
      top: 9px;
      right: 6px;
    }
    .fa-pencil {
      display: none;
      position: absolute;
      top: 9px;
      right: 26px;
    }
    .fa-registered {
      display: none;
      position: absolute;
      top: 9px;
      right: 47px;
    }
    position: relative;
    color: $project-color;
    padding: 6px 0 6px 10px;
    white-space: nowrap;
  }
</style>
