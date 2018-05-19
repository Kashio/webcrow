<template>
  <div class="main-wrapper">
    <div class="breadcrumb"></div>
    <editor v-model="content" @init="editorInit" lang="html" theme="chrome"></editor>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import editor from 'vue2-ace-editor';

  export default {
    name: 'Main',
    components: {
      editor
    },
    data() {
      return {
        content: 'workssss'
      };
    },
    computed: {
      ...mapGetters('path', [
        'path'
      ])
    },
    methods: {
      editorInit() {
        require('brace/ext/language_tools');
        require('brace/mode/html');
        require('brace/mode/javascript');
        require('brace/mode/less');
        require('brace/theme/chrome');
        require('brace/snippet/javascript');
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>

