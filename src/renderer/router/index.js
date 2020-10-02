import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/IndexPage').default
    },
    {
      path: '/chat',
      component: require('@/components/DmkChatPage').default
    },
    {
      path: '/about',
      component: require('@/components/AboutPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
