<template>
  <div class="create-directory">
    <i class="fa fa-plus pointer" @click="createDirectory"></i>
    <input type="text" placeholder="Directory name" class="directory-name-input" v-model="directory.name"
           @keyup.enter="createDirectory"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import config from 'config';
  import {DIRECTORY} from '../Entry/types';

  export default {
    name: 'DirectoryCreator',
    data() {
      return {
        directory: {
          name: ''
        }
      };
    },
    computed: mapGetters('path', ['path']),
    methods: {
      createDirectory() {
        this
          .$store
          .dispatch('entries/createEntry', {
            entry: {
              path: this.path + this.directory.name,
              name: this.directory.name,
              type: DIRECTORY
            }
          })
          .then(response => {
            this.$toast({
              message: `Successfully created directory "${response.data}"`,
              ...config.toast.success
            });
          })
          .catch(error => {
            this.$toast({
              message: `Error creating directory "${error.data}"`,
              ...config.toast.failure
            });
          });
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  $input-border-color: #969696;
  $input-border-color-focus: #c9c9c9;
  $create-directory-color: #797979;

  .fa-plus:hover {
    &:hover {
      color: lighten($create-directory-color, 50%);
    }
    color: $create-directory-color;
  }

  .directory-name-input {
    width: 70%;
    margin-left: 10px;
    color: white;
    background-color: transparent;
    height: 0;
    outline: none;
    padding: 10px;
    border: none;
    border-bottom: solid 1px $input-border-color;
    transition: border 0.3s;
  }

  .directory-name-input:focus {
    border-bottom: solid 1px $input-border-color-focus;
  }
</style>
