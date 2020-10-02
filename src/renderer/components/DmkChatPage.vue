<template lang="pug">
  div.md-layout.md-alignment-top-center
    div.md-layout-item.md-size-65
      md-button.md-icon-button.md-primary(to="/")
        md-icon arrow_back
      h1.md-title DmkChat
      md-button(@click="start()") start
      md-button(@click="stop()") stop
</template>

<script>
  export default {
    name: 'DmkChatPage',
    created () {
      this.$electron.ipcRenderer.on('dmkchat', (event, args) => {
        console.log('dmkchat', args)
      })
    },
    methods: {
      start () {
        this.$electron.ipcRenderer.send('dmkchat', 'start')
      },
      stop () {
        this.$electron.ipcRenderer.send('dmkchat', 'stop')
      }
    }
  }
</script>

<style scoped>

</style>
