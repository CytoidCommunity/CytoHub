<template lang="pug">
  div.md-layout.md-alignment-top-center
    div.md-layout-item.md-size-65
      md-button.md-icon-button.md-primary(to="/")
        md-icon arrow_back
      h1.md-title 关于 CytoHub
      p.md-body-2 CytoHub 是由 CytoLive 开发的垃圾软件。
      md-button.md-accent(@click="open('https://github.com/CytoidCommunity/CytoHub')") 在 GitHub 上查看源码
      md-content.md-elevation-5
        system-information
</template>

<script>
  import SystemInformation from '@/components/AboutPage/SystemInformation'
  export default {
    name: 'AboutPage',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
