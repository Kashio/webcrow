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
            <router-view name="content"></router-view>
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

  .v--modal-overlay {
    font-family: $font-stack;
  }

  .app-layout {
    .main {
      .main-wrapper {
        .main-body {
          main {
            display: table-cell;
            width: calc(100% - 270px);
            height: 100%;
            vertical-align: top
          }
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
