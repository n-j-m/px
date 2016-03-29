<template>
  <div>
    <h1>Photos</h1>
    <pic-list></pic-list>
  </div>
</template>

<script>
import { retrievePics } from '../vuex/actions'
import PicList from './PicList.vue'

export default {
  components: { PicList },
  created() {
    this.getPics()
  },
  vuex: {
    getters: {
      pics(state) {
        return state.pics
      }
    },
    actions: {
      getPics: retrievePics
    }
  }
}
</script>