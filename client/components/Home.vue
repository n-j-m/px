<template>
  <div>
    <div class="container">
      <h1>Home</h1>
      <button @click="getPics" class="btn btn-primary">
        Get Pics
      </button>
    </div>
    <div class="container">
      <pic-list :pics="pics"></pic-list>
    </div>
  </div>
</template>

<script>
import { retreivePics } from '../vuex/actions'
import PicList from './PicList.vue'

export default {
  components: { PicList },
  vuex: {
    getters: {
      pics(state) {
        return state.pics
      }
    },
    actions: {
      getPics: retreivePics
    }
  }
}
</script>