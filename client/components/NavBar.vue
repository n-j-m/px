<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a v-link="{path: '/', exact: true}" class="navbar-brand">
          <div v-if="processing" class="la-sm la-dark la-ball-clip-rotate">
            <div></div>
          </div>
          gradebook
        </a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-link-active><a v-link="{path: '/', exact: true}">Home</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  vuex: {
    getters: {
      processing(state) {
        return state.app.processing
      }
    }
  }
}
</script>