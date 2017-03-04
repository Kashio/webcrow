<template>
  <div class="menu-section">
    <div class="menu-section-header">
      <span>{{header}}</span>
    </div>
    <div class="menu-section-body">
      <ul class="menu-section-items">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Section',
    props: {
      header: {
        type: String,
        required: true
      },
    }
  };
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  $menu-section-header-border-color: hsla(0,0%,61%,.07);
  $menu-section-header-color: #797979;
  $menu-section-body-color: #ababab;

  .menu-section {
    .menu-section-header {
      color: $menu-section-header-color;
      margin-bottom: 7px;
      padding: 0 0 4px;
      border-bottom: 1px solid $menu-section-header-border-color;
      text-transform: uppercase;
      font-weight: 700;
      font-size: .8rem;
    }
    .menu-section-body {
      .menu-section-items {
        list-style-type: none;
      }
      color: $menu-section-body-color;
      font-size: .8rem;
    }
    font: inherit;
    margin-bottom: 15px;
  }
</style>
