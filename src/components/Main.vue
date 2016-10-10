<template>
  <div id="root">
    <header-component></header-component>
    <main>
    </main>
  </div>
</template>

<script>
  import Header from './Header.vue';
  export default {
    name: 'Main',
    components: {
      'header-component': Header
    }
  };
</script>
