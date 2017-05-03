<template>
  <div class="menu-wrapper">
    <section-component header="Create Entry" id="create-entry-section">
      <item-component>
        <div>
          <i class="fa fa-plus pointer" @click="createEntry"></i>
          <input type="text" placeholder="Entry name" class="new-entry-input" v-model="newEntry"
                 @keyup.enter="createEntry"/>
        </div>
      </item-component>
    </section-component>
    <section-component header="Entries" id="entries-section">
      <vue-scroll-bar class="vue-scroll-bar">
        <div class="vue-scroll-bar-content">
          <item-component v-for="(entry, index) in entries">
            <entry-component :entry="entry" :entry-index="index"></entry-component>
          </item-component>
        </div>
      </vue-scroll-bar>
    </section-component>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Section from '../../Layout/Navbar/Section/Section.vue';
  import Item from '../../Layout/Navbar/Section/Item/Item.vue';
  import Entry from './Entry/Entry.vue';
  import EntriesService from '../../../api/entries';
  import EntryService from '../../../api/entry';
  import config from '../../../app.config';

  import VueScrollBar from 'vue2-scrollbar';
  import 'vue2-scrollbar/dist/style/vue2-scrollbar.css';

  export default {
    name: 'Menu',
    components: {
      'vue-scroll-bar': VueScrollBar,
      'section-component': Section,
      'item-component': Item,
      'entry-component': Entry
    },
    data() {
      return {
      	path: '',
        newEntry: ''
      }
    },
    created() {
      this.getEntries(this);
    },
    computed: {
      ...mapGetters([
        'entries'
      ])
    },
    methods: {
      createEntry() {
        this.$store.dispatch('createEntry', this);
      },
      ...mapActions([
      	'getEntries'
      ])
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

  .menu-wrapper {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
  }

  #create-entry-section {
    div {
      opacity: .3;
    }
  }

  .fa-plus {
    &:hover {
      color: $new-entry-button-font-color;
    }
    float: left;
    line-height: 1.65;
  }

  .new-entry-input {
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

  .new-entry-input:focus {
    border-bottom: solid 1px $input-border-color-focus;
  }

  #entries-section {
    .vue-scroll-bar {
      background-color: inherit;
      position: absolute;
      top: 96px;
      bottom: 0;
      right: -10px;
    }
  }
</style>

