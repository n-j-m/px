const app_settings = require('json!./app_settings.json')

let clientsLoaded = 0
let auth2Loaded = false
let signin2Loaded = false
let auth2

const apiLoader = {
  client() {
    return new Promise(resolve => {
      let ids = 0
      const check = () => {
        if (ids ++ > 1000 || app_settings.libraries.length === clientsLoaded) {
          resolve()
        }
        else {
          setTimeout(check, 50)
        }
      }
      
      check()
    })
  },

  auth() {
    return new Promise(resolve => {
      const check = () => {
        if (auth2Loaded && signin2Loaded) {
          resolve()
        }
        else {
          setTimeout(check, 50)
        }
      }
      check()
    })
  },

  gapiLoaded() {
    return new Promise(resolve => {
      const hasgapi = () => {
        if (typeof gapi !== 'undefined' && gapi.client) {
          resolve()
        }
        else {
          setTimeout(hasgapi, 50)
        }
      }
      hasgapi()
    })
  },

  getAuth2() {
    return auth2
  },

  signId() {
    const options = new gapi.auth2.SigninOptionsBuilder({
      scopes: app_settings.scopes.join(' ')
    })

    this.getAuth2().signIn(options)
  }
}

apiLoader.gapiLoaded()
  .then(() => {
    gapi.load('auth2', () => {
      auth2 = gapi.auth2.init({
        client_id: CLIENT_ID,
        scopes: app_settings.scopes.join(' ')
      })
      auth2Loaded = true
    })

    gapi.load('signin2', () => signin2Loaded = true)

    const incrementClients = () => clientsLoaded++

    for (let i = 0, l = app_settings.libraries.length; i < l; i++) {
      let client = app_settings.libraries[i]
      gapi.client.load(client.name, client.version, incrementClients)
    }
  })

  export default apiLoader