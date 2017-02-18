<template>
  <div class="menu-wrapper">
    <section-component header="Create Project">
      <item-component>
        <div>
          <i class="fa fa-plus pointer" @click="createEntry()"></i>
          <input type="text" placeholder="Project name" class="new-entry-input" v-model="newEntry" @keyup.enter="createEntry()" />
        </div>
      </item-component>
    </section-component>
    <section-component header="Projects">
      <item-component v-for="project in projects">
        <div>
          LOL
        </div>
      </item-component>
    </section-component>
  </div>
</template>

<script>
  import Section from '../../Layout/Navbar/Section/Section.vue';
  import Item from '../../Layout/Navbar/Section/Item/Item.vue';
  import ProjectService from '../../../api/project';
  export default {
    name: 'Menu',
    components: {
      'section-component': Section,
      'item-component': Item
    },
    data() {
        return {
            projects: [],
            newEntry: ''
        }
    },
    methods: {
        createEntry() {
            ProjectService(this)
              .create({id: this.newEntry})
              .then((response) => this.$toast({
                message: response.body,
                fade: 400,
                time: 3000,
                borderRadius: 3,
                color: 'white',
                backgroundColor: 'green'
              }))
              .catch((error) => this.$toast({
                message: error.body,
                fade: 400,
                time: 3000,
                borderRadius: 3,
                color: 'white',
                backgroundColor: 'red'
              }));
        }
    }
  };
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  $input-border-color: #c9c9c9;
  $input-border-color-focus: #969696;

  .menu-wrapper {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
  }
  .fa-plus {
    float: left;
    line-height: 1.65;
  }
  .new-entry-input {
    width: 70%;
    margin-left: 10px;
    color: inherit;
    background-color: inherit;
    height: 0;
    outline: none;
    padding: 10px;
    border: none;
    border-bottom: solid 1px $input-border-color;
    transition: border 0.3s;
  }
  .new-entry-input:focus {
    border-bottom: solid 1px $input-border-color-focus;
  }
</style>
