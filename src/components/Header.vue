<template>
  <header v-once class="header">
    <router-link to="/" class="brand">
      <span class="brand-name">Webcrow</span>
      <span class="brand-version">1.0.0</span>
    </router-link>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  };
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  $font-stack: 'Open Sans', sans-serif;
  $primary-color: #2d5079;
  $border-color: #345b88;
  $brand-color: whitesmoke;

  .header {
    .brand {
      .brand-name {
        letter-spacing: -1px;
      }
      .brand-version {
        font-size: 50%;
      }
      display: table-cell;
      vertical-align: middle;
      text-decoration: none;
      color: $brand-color;
      text-transform: lowercase;
      font-weight: 100;
      font-size: 120%;
    }
    width: 100%;
    display: table;
    font-family: $font-stack;
    background-color: $primary-color;
    border-color: $border-color;
    border-bottom: 1px solid;
    align-items: center;
    padding: 0 10px;
    height: 50px;
    user-select: none;
  }
</style>
