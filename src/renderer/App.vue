<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'CytoHub'
  }
</script>

<style lang="scss">
  @import '~vue-material/dist/theme/engine';
  @include md-register-theme('default', (
    primary: md-get-palette-color(blue, A200),
    accent: md-get-palette-color(red, A200)
  ));
  @import '~vue-material/dist/theme/all';
</style>
