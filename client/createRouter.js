import VueRouter from 'vue-router'
import Home from './components/Home.vue'

export default function createRouter(Vue) {
  Vue.use(VueRouter)

  const router = new VueRouter({
    history: true,
    linkActiveClass: 'active'
  })

  router.map({
    '/': {
      component: Home
    }
  })
  router.redirect({
    '*': '/'
  })

  return router
}