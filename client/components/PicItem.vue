<template>
  <div class="card-cell">
    <div class="card-image mdl-card mdl-shadow--2dp":style="styleObj" @click="viewPic">
      <div class="mdl-card__title mdl-card--expand"></div>
      <div class="mdl-card__actions">
        <span class="card-image__filename">
          {{pic.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pic'],
  methods: {
    viewPic() {
      var newWin = window.open(this.pic.url, {noopener: true})
      newWin.opener = null
    }
  },
  computed: {
    styleObj() {
      return {
        background: `url(${this.pic.thumbnailUrl}) center / cover`
      }
    }
  }
}
</script>

<style>
.card-cell {
  display: inline-block;
  padding: 16px;
}
.card-image.mdl-card {
  cursor: pointer;
  width: 256px;
  height: 256px;
}
.card-image > .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}
.card-image__filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
</style>