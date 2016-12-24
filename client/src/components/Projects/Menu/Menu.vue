<template>
  <div class="menu-wrapper">
    <div class="menu-section">
      <div class="menu-section-header">
        <span>Create Project</span>
      </div>
      <div class="menu-section-body">
        <ul class="menu-section-items">
          <li class="menu-section-item">
            <i class="fa fa-plus pointer"></i>
            <input type="text" placeholder="Project name" class="new-entry-input" />
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-section">
      <div class="menu-section-header">
        <span>Projects</span>
      </div>
      <div class="menu-section-body">
        <ul class="menu-section-items">
          <li class="menu-section-item" v-for="project in projects">
            <i class="fa fa-plus pointer"></i>
            <input type="text" placeholder="Project name" class="new-entry-input" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu'
  };
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  $menu-section-header-border-color: hsla(0,0%,61%,.07);
  $menu-section-header-color: #797979;
  $menu-section-body-color: #ababab;
  $input-border-color: #c9c9c9;
  $input-border-color-focus: #969696;

  .menu-wrapper {
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
          .menu-section-item {
            .fa-plus {
              float: left;
              line-height: 1.65;
            }
            .new-entry-input {
              width: 70%;
              margin-left: 10px;
            }
          }
          list-style-type: none;
        }
        color: $menu-section-body-color;
        opacity: .3;
        font-size: .8rem;
      }
      font: inherit;
      margin-bottom: 15px;
    }
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
  }

  input[type="text"] {
    color: inherit;
    background-color: inherit;
    height: 0;
    outline: none;
    padding: 10px;
    border: none;
    border-bottom: solid 1px $input-border-color;
    transition: border 0.3s;
  }
  input[type="text"]:focus {
    border-bottom: solid 1px $input-border-color-focus;
  }
</style>
