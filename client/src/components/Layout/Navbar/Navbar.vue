<template>
  <nav class="navigation-container">
    <div class="navigation">
      <div class="links">
        <router-link v-for="(link, index) in links" :key="index" :to="link.to" class="link"
                     v-tooltip="{ message: link.description, fade: 'fast' }">
          <i class="fa" :class="link.icon"></i>
        </router-link>
      </div>
      <div class="menu">
        <slot name="menu"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
  import {links} from '../../../services/links';

  export default {
    name: 'Navbar',
    data() {
      return {
        links
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  $font-stack: 'Open Sans', sans-serif;
  $primary-color: #1a1a1a;
  $secondary-color: #121212;
  $border-color: #212121;
  $brand-color: whitesmoke;
  $link-color: #1f1f1f;
  $link-active-color: #4e4e4e;
  $link-hover-color: #2b2b2b;
  $link-font-color: #6f6f6f;
  $link-hover-font-color: #9e9e9e;

  .navigation-container {
    .navigation {
      .links {
        .router-link-active {
          background: $link-active-color !important;
          color: $link-hover-font-color !important;
        }
        .link {
          &:hover {
            background: $link-hover-color;
            color: $link-hover-font-color;
          }
          display:block;
          width: 34px;
          height: 34px;
          line-height:34px;
          text-align:center;
          background: $link-color;
          color: $link-font-color;
          margin: 0 auto 10px;
          border-radius: 50%;
          -webkit-font-smoothing:antialiased;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
          cursor:pointer;
          transition:all .15s ease;
        }
        width: 50px;
        height:inherit;
        display:table-cell;
        padding: 10px 0;
        background-color: $secondary-color;
      }
      .menu {
        height:inherit;
        display:table-cell;
        position:relative;
        padding: 10px 0;
        font-family: $font-stack;
      }
      width:inherit;
      height:inherit;
      display:table;
    }
    display:table-cell;
    width: 270px;
    height: 100%;
    background-color: $primary-color;
    border-color: $border-color;
    border-right: 1px solid;
    box-sizing:border-box;
    user-select:none;
  }
</style>
