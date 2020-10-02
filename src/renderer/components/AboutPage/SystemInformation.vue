<template lang="pug">
  md-list
    md-subheader 当前运行环境
    md-list-item
      md-icon(:md-src="node.svg")
      div.md-list-item-text
        span.name Node.js:
        span.value {{ node.ver }}
    md-list-item
      md-icon(:md-src="vue.svg")
      div.md-list-item-text
        span.name Vue:
        span.value {{ vue.ver }}
    md-list-item
      md-icon(:md-src="electron.svg")
      div.md-list-item-text
        span.name Electron:
        span.value {{ electron.ver }}
    md-list-item
      md-icon(:md-src="chrome.svg")
      div.md-list-item-text
        span.name Chrome:
        span.value {{ chrome.ver }}
    md-list-item
      md-icon(:md-src="platform.svg")
      div.md-list-item-text
        span.name Platform:
        span.value {{ platform.ver }}
</template>

<script>
  export default {
    name: 'SystemInformation',
    data () {
      return {
        chrome: {
          ver: process.versions.chrome,
          svg: require('./chrome.svg').default
        },
        electron: {
          ver: process.versions.electron,
          svg: require('./electron.svg').default
        },
        node: {
          ver: process.versions.node,
          svg: require('./nodejs.svg').default
        },
        platform: {
          ver: require('os').platform(),
          svg: require('./platform.svg').default
        },
        vue: {
          ver: require('vue/package.json').version,
          svg: require('./vue.svg').default
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .name
    color: #6a6a6a
    margin-right: 6px
  .value
    color: #35495e
    font-weight: bold
</style>
