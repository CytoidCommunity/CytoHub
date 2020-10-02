<template lang="pug">
  md-app
    md-app-content
      div
        div.hero
        h1.md-display-4.hero-title CytoHub
      div.md-layout.md-alignment-top-center
        div.md-layout-item.md-size-33(v-for="kit in kits")
          router-link(:to="kit.path")
            md-empty-state.md-primary.md-elevation-5(
              :md-icon="kit.icon"
              :md-label="kit.name"
              :md-description="kit.description"
            )
</template>

<script>
  import Kits from './IndexPage/Kits'
  export default {
    name: 'IndexPage',
    data () {
      return {
        kits: Kits
      }
    }
  }
</script>

<style lang="sass" scoped>
  .hero
    background: url(~@/assets/bg.png) no-repeat center
    background-size: cover
    top: 0
    left: 0
    right: 0
    height: 270px
    opacity: 30%
    position: absolute
  .hero-title
    text-align: center
</style>
