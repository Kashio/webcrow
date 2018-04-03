<template>
  <header v-once class="header">
    <router-link to="/" class="brand">
      <span class="brand-name">{{ name }}</span>
      <span class="brand-version">{{ version }}</span>
    </router-link>
  </header>
</template>

<script>
  import {name, version} from '../../../services/brand';

  export default {
    name: 'Header',
    data() {
      return {
        name,
        version
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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
      padding-left: 10px;
      padding-top: 10px;
      float: left;
      vertical-align: middle;
      text-decoration: none;
      color: $brand-color;
      text-transform: lowercase;
      font-weight: 100;
      font-size: 120%;
    }
    display: table-row;
    height: 50px;
    font-family: $font-stack;
    background-color: $primary-color;
    border-color: $border-color;
    border-bottom: 1px solid;
    align-items: center;
    padding: 0 10px;
    user-select: none;
  }
</style>
