<template>
  <div class="container">
    <form class="col-md-4 col-md-offset-2">
      <button @click.prevent="auth" class="btn btn-lrg btn-primary">
        Sign in to Google Drive
      </button>
    </form>
  </div>
</template>

<script>
import api from 'api'
const { authenticate } = api

export default {
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