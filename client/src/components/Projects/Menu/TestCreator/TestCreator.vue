<template>
  <div class="create-test">
    <i class="fa fa-plus pointer" @click="createTest"></i>
    <input type="text" placeholder="Test name" class="test-name-input" v-model="test.name"/>
    <input type="text" placeholder="Website url" class="test-website-url" v-model="test.url"/>
    <input type="text" placeholder="Username" class="test-username" v-model="test.username"/>
    <input type="text" placeholder="Password" class="test-password" v-model="test.password"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import config from 'config';
  import {TEST} from '../Entry/types';

  export default {
    name: 'TestCreator',
    data() {
      return {
        test: {
          name: '',
          url: '',
          username: '',
          password: ''
        }
      };
    },
    computed: mapGetters('path', ['path']),
    methods: {
      createTest() {
        this
          .$store
          .dispatch('entries/createEntry', {
            entry: {
              name: this.test.name + TEST_FILE_SUFFIX,
              type: TEST
            },
            path: this.path
          })
          .then(() => {
            this.$toast({
              message: `Successfully created test "${this.test.name}"`,
              ...config.toast.success
            });
          })
          .catch(() => {
            this.$toast({
              message: `Error creating test "${this.test.name}"`,
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

  .test-name-input,
  .test-website-url,
  .test-username,
  .test-password {
    width: 70%;
    margin-left: 10px;
    color: white;
    background-color: inherit;
    height: 0;
    outline: none;
    padding: 10px;
    border: none;
    border-bottom: solid 1px $input-border-color;
    transition: border 0.3s;
  }

  .test-website-url,
  .test-username,
  .test-password {
    margin-left: 23px;
  }

  .test-name-input:focus,
  .test-website-url:focus,
  .test-username:focus,
  .test-password:focus {
    border-bottom: solid 1px $input-border-color-focus;
  }

</style>
