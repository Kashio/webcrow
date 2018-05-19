<template>
  <div class="menu-wrapper">
    <Section header="Add Directory" class="add-directory-section">
      <Item>
        <DirectoryCreator/>
      </Item>
    </Section>
    <Section header="Add Test" class="add-test-section">
      <Item>
        <FixtureCreator/>
      </Item>
    </Section>
    <Section header="Entries" class="entries-section">
      <div class="entries-content">
        <Item v-for="(entry, index) in entries" :key="entry.name">
          <Entry :entry="entry" :index="index"></Entry>
        </Item>
      </div>
    </Section>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import config from 'config';
  import Section from '../../Layout/Navbar/Section/Section';
  import Item from '../../Layout/Navbar/Section/Item/Item';
  import DirectoryCreator from './DirectoryCreator/DirectoryCreator';
  import FixtureCreator from './FixtureCreator/FixtureCreator';
  import Entry from './Entry/Entry';

  export default {
    name: 'Menu',
    components: {
      Section,
      Item,
      DirectoryCreator,
      FixtureCreator,
      Entry
    },
    created() {
      this.getEntries();
    },
    computed: {
      ...mapGetters('path', [
        'path'
      ]),
      ...mapGetters('entries', [
        'entries'
      ])
    },
    methods: {
      getEntries() {
        this
          .$store
          .dispatch('entries/getEntries', {
            path: this.path
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

  .menu-wrapper {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
  }

  .add-directory-section, .add-test-section {
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

  .new-directory-input, .new-test-input {
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

  .new-directory-input:focus, .new-test-input:focus {
    border-bottom: solid 1px $input-border-color-focus;
  }

  .entries-section {
    .entries-content {
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
      &::-webkit-scrollbar-thumb {
        background-color: $project-hover-background-color;
      }
      position: relative;
      left: -10px;
      width: 110%;
      height: 752px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>

