import VueRouter from 'vue-router'
import Photos from './components/Photos.vue'
import Login from './components/Login.vue'
import api from 'api'
const { isAuthed } = api

export default function createRouter(Vue) {
  Vue.use(VueRouter)

  const router = new VueRouter({
    history: true,
    linkActiveClass: 'active'
  })

  router.map({
    '/': {
      component: Photos
    },
    '/login': {
      component: Login
    }
  })
  router.redirect({
    '*': '/'
  })

  router.beforeEach(({to, next, redirect}) => {
    if (to.path === '/login') {
      return next()
    }
    else {
      isAuthed()
        .then((a) => {
          next()
        })
        .catch((e) => {
          console.log('e:', e)
          redirect('/login')
        })
    }
  })

  return router
}