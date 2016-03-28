<template>
  <div class="container">
    <nav-bar :processing="processing"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import store from '../vuex/store'

export default {
  components: { NavBar },
  store
}
</script>

<style>
body {
  padding-top: 70px;
}
</style>