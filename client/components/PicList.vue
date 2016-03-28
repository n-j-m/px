<template>
  <div>
    <pic-row v-for="picset in processedPics" :picset="picset"></pic-row>
  </div>
</template>

<script>
import PicRow from './PicRow.vue'

export default {
  components: { PicRow },
  vuex: {
    getters: {
      pics(state) {
        return state.pics.pics
      }
    }
  },
  computed: {
    processedPics() {
      const result = []
      let intermediate = []
      this.pics.forEach((pic, i) => {
        intermediate.push(pic)
        if (intermediate.length === 4) {
          result.push(intermediate)
          intermediate = []
        }
      })
      if (intermediate.length > 0) {
        result.push(intermediate)
      }
      return result
    }
  }
}
</script>