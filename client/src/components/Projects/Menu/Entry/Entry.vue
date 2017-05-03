<template>
  <div class="entry pointer">
    <i class="fa fa-trash-o" @click="deleteEntry"></i>
    <i class="fa fa-pencil" @click="toggleEditable(entryIndex)"></i>
    <i class="fa fa-folder-o"></i>
    <input v-truncated-title class="project-name"
          :readonly="!entry.isEditable"
          v-focus-toggle="entry.isEditable"
          @blur="renameEntry"
          @keyup.enter="renameEntry"
          :value="entry.name" @input="setEntryName"/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Entry',
    props: {
      entry: {
        validator: entry => {
          return entry &&
            entry.path !== undefined &&
            entry.name !== undefined &&
            entry.isEditable !== undefined;
        }
      },
      entryIndex: {
        type: Number,
        required: true
      }
    },
    methods: {
      deleteEntry() {
        this.$store.dispatch('deleteEntry', this);
      },
      renameEntry(e) {
        if (e.keyCode === 13) {
          e.target.blur();
        } else {
          if (this.entry.name !== this.entry.path) {
            if (this.entry.name.length > 0) {
              this.$store.dispatch('renameEntry', this);
            } else {
              this.entry.name = this.entry.path;
            }
          }
          this.toggleEditable(this.entryIndex);
        }
      },
      setEntryName(e) {
          this.$store.commit('SET_ENTRY_NAME', {
            index: this.entryIndex,
            name: e.target.value
          });
      },
      ...mapMutations({
        toggleEditable: 'TOGGLE_ENTRY_EDITABLE'
      })
    }
  };
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  $input-border-color: #969696;
  $input-border-color-focus: #c9c9c9;
  $new-entry-button-font-color: #c9c9c9;
  $project-color: #797979;
  $project-hover-background-color: #121212;
  $project-hover-color: #a0a0a0;

  .entry {
    &:hover {
      .fa-trash-o {
        display: inline;
      }
      .fa-pencil {
        display: inline;
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
      right: 22px;
    }
    color: $project-color;
    position: relative;
    width: 200px;
    left: -10px;
    padding: 6px 0 6px 20px;
    white-space: nowrap;
  }
</style>
