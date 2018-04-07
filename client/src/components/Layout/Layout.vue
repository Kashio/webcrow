<template>
  <div class="app-layout">
    <Header/>
    <div class="main"> <!-- IE9 support -->
      <div class="main-wrapper"> <!-- IE9 support -->
        <div class="main-body">
          <Navbar>
            <router-view name="menu" slot="menu"></router-view>
          </Navbar>
          <main>
            <router-view name="main"></router-view>
          </main>
        </div>
      </div>
    </div>
    <v-dialog/>
  </div>
</template>

<script>
  import Header from './Header/Header';
  import Navbar from './Navbar/Navbar';

  export default {
    name: 'Layout',
    components: {
      Header,
      Navbar
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  $font-stack: 'Open Sans', sans-serif;

  .app-modal {
    font-family: $font-stack !important;
    /*background: #182028 !important;*/
    /*color: white !important;*/
    background-color: transparent;
    border-radius: 100%;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.65);
  }

  .app-layout {
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
