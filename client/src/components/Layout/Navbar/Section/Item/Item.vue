<template>
  <li class="menu-section-item">
    <slot></slot>
    </li>
</template>

<script>
  export default {
    name: 'Item'
  };
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .menu-section-item {
    margin-bottom: 5px;
  }
</style>
