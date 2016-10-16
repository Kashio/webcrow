<template>
  <div class="app-layout">
    <header-component></header-component>
    <div class="main">
      <navbar-component>
        <router-view name="menu" slot="menu"></router-view>
      </navbar-component>
      <main>
        <router-view name="main"></router-view>
      </main>
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
  .app-layout, .main{
    display: table;
    height: 100%;
    width: 100%;
  }
</style>
