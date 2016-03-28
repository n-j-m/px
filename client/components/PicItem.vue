<template>
  <a :href="pic.url" target="_blank" rel="noopener">
    <div :class="cls" @mouseOver.capture="handleIn" @mouseOut.capture="handleOut" v-el:panel>
      <div class="pic-item-heading panel-heading">
        {{pic.title}}
      </div>
      <div class="panel-body">
          <img :src="pic.thumbnailUrl" />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['pic'],
  data() {
    return {
      cls: {
        panel: true,
        'panel-default': false
      }
    }
  },
  methods: {
    handleIn(ev) {
      console.log('in')
      this.cls['panel-default'] = true
    },
    handleOut(ev) {
      console.log('out')
      this.cls['panel-default'] = false
    }
  }
}
</script>