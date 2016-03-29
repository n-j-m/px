import Vue from 'vue'
import createRouter from './createRouter'
import Root from './components/Root.vue'
import vmdl from 'vue-mdl'

if (NODE_ENV !== 'production') {
  Vue.config.debug = true
}

// css imports
import 'material-design-lite/material.css'
import './css/material.indigo-red.min.css'

const router = createRouter(Vue)

vmdl.registerAll(Vue)

router.start(Root, '#root')