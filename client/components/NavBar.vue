<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        {px}
      </span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" v-link="{path: '/', exact: true}">
          Home
        </a>
        <mdl-spinner :active="isActive"></mdl-spinner>
      </nav>
    </div>
  </header>
</template>

<script>
import vmdl from 'vue-mdl'

export default {
  components: {
    mdlSpinner: vmdl.components['mdlSpinner']
  },
  vuex: {
    getters: {
      processing(state) {
        return state.app.processing
      }
    }
  },
  computed: {
    isActive() {
      return this.processing > 0
    }
  }
}
</script>