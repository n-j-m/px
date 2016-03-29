<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--4-col-desktop mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet mdl-cell--2-col-phone">
      <form>
        <mdl-button raised accent icon>
          <i class="material-icons">add</i>
          Sign in to Google
        </mdl-button>
      </form>
    </div>
  </div>
</template>

<script>
import api from 'api'
const { authenticate } = api
import vmdl from 'vue-mdl'

export default {
  components: {
    mdlButton: vmdl.components['mdlButton']
  },
  methods: {
    auth() {
      authenticate()
        .then(() => {
          this.$router.go('/')
        })
    }
  }
}
</script>