<template>
  <div class="content">
    <div class="breadcrumb"></div>
    <editor v-model="code"
            @init="editorInit"
            lang="javascript"
            theme="ambiance"
            :options="{enableLiveAutocompletion: true}"></editor>
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
      ]),
      ...mapGetters('code', [
        'code'
      ])
    },
    methods: {
      editorInit() {
        require('brace/ext/language_tools');
        require('brace/ext/searchbox');
        require('brace/mode/javascript');
        require('brace/theme/ambiance');
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .content {
    width: 100%;
    height: 100%;
  }
</style>

