<template>
  <div v-for="pic in picset" class="pic-item col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <pic-item :pic="pic"></pic-item>
  </div>
</template>

<script>
import PicItem from './PicItem.vue'

export default {
  props: ['picset'],
  components: { PicItem }
}
</script>