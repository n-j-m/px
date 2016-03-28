import Vue from 'vue'
import createRouter from './createRouter'
import Root from './components/Root.vue'

if (process.env.NODE_ENV !== 'production') {
  Vue.config.debug = true
}

import 'bootstrap/dist/css/bootstrap.css'
import './css/ball-clip-rotate.css'
import './css/main.css'

const router = createRouter(Vue)

router.start(Root, '#root')