<template>
  <div class="entry pointer">
        <i class="fa fa-trash-o" @click="deleteEntry"></i>
        <i class="fa fa-pencil" @click="toggleEditable"></i>
        <div truncated-title>
          <i class="fa fa-folder-o"></i>
          <span class="project-name" :contenteditable="entry.isEditable">{{ entry.name }}</span>
        </div>
  </div>
</template>

<script>
  import EntryService from '../../../../api/entry';
  import config from '../../../../app.config';

  export default {
    name: 'Entry',
    props: {
      entry: {
        validator: entry => {
          return entry && entry.path && entry.isEditable;
        }
      },
      entryIndex: {
      	type: Number,
        required: true
      }
    },
    methods: {
      deleteEntry() {
        EntryService(this)
          .remove(this.entry.name)
          .then(response => {
            this.$store.state.commit('remove', this.entryIndex);
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
      },
      toggleEditable() {
      	this.entry.isEditable = !this.entry.isEditable;
      }
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
    div {
      width: 80%;
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
    padding: 6px 0 6px 10px;
    white-space: nowrap;
  }
</style>
