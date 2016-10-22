<template>
  <div class="app-layout">
    <header-component></header-component>
    <div class="main"> <!-- IE9 support -->
      <div class="main-wrapper"> <!-- IE9 support -->
        <div class="main-body">
          <navbar-component>
            <router-view name="menu" slot="menu"></router-view>
          </navbar-component>
          <main>
            <router-view name="main"></router-view>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './Header/Header.vue';
  import Navbar from './Navbar/Navbar.vue';
  export default {
    name: 'Layout',
    components: {
      'header-component': Header,
      'navbar-component': Navbar
    }
  };
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .app-layout{
    .main {
      .main-wrapper {
        .main-body {
          display: table;
          height: 100%;
          width: 100%;
          margin-bottom: -9999px;
        }
        display: table-cell;
        height: 100%;
        overflow: hidden;
      }
      display: table-row;
      height: 100%;
    }
    display: table;
    height: 100%;
    width: 100%;
  }
</style>
