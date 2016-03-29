<template>
  <pic-item v-for="pic in picset" :pic="pic"></pic-item>
</template>

<script>
import PicItem from './PicItem.vue'

export default {
  props: ['picset'],
  components: { PicItem }
}
</script>