<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <nav-bar :processing="processing"></nav-bar>
    <drawer></drawer>
    <main class="mdl-layout__content">
      <router-view class="page-content"></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Drawer from './Drawer.vue'
import store from '../vuex/store'

export default {
  components: { NavBar, Drawer },
  store
}
</script>