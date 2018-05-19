<template>
  <div class="create-fixture">
    <i class="fa fa-plus pointer" @click="createFixture"></i>
    <input type="text" placeholder="Fixture name" class="fixture-name-input" v-model="fixture.name"/>
    <input type="text" placeholder="Website url" class="fixture-website-url" v-model="fixture.url"/>
    <input type="text" placeholder="Username" class="fixture-username" v-model="fixture.username"/>
    <input type="text" placeholder="Password" class="fixture-password" v-model="fixture.password"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import config from 'config';
  import {FIXTURE} from '../Entry/types';

  export default {
    name: 'FixtureCreator',
    data() {
      return {
        fixture: {
          name: '',
          url: '',
          username: '',
          password: ''
        }
      };
    },
    computed: mapGetters('path', ['path']),
    methods: {
      createFixture() {
        this
          .$store
          .dispatch('entries/createEntry', {
            entry: {
              path: this.path + this.fixture.name + FIXTURE_FILE_SUFFIX,
              name: this.fixture.name + FIXTURE_FILE_SUFFIX,
              url: this.fixture.url,
              username: this.fixture.username,
              password: this.fixture.password,
              type: FIXTURE
            }
          })
          .then(response => {
            this.$toast({
              message: `Successfully created fixture "${response.data.replace(new RegExp(`${FIXTURE_FILE_SUFFIX}$`), '')}"`,
              ...config.toast.success
            });
          })
          .catch(error => {
            this.$toast({
              message: `Error creating fixture "${error.data.replace(new RegExp(`${FIXTURE_FILE_SUFFIX}$`), '')}"`,
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
  $create-test-color: #797979;

  .fa-plus:hover {
    &:hover {
      color: lighten($create-test-color, 50%);
    }
    color: $create-test-color;
  }

  .fixture-name-input,
  .fixture-website-url,
  .fixture-username,
  .fixture-password {
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

  .fixture-website-url,
  .fixture-username,
  .fixture-password {
    margin-left: 23px;
  }

  .fixture-name-input:focus,
  .fixture-website-url:focus,
  .fixture-username:focus,
  .fixture-password:focus {
    border-bottom: solid 1px $input-border-color-focus;
  }

</style>
