import Vue from 'vue'
import createRouter from './createRouter'
import Root from './components/Root.vue'

if (NODE_ENV !== 'production') {
  Vue.config.debug = true
}

// css imports
import 'material-design-lite/material.css'
console.log('mdl:', componentHandler)

const router = createRouter(Vue)

router.start(Root, '#root')