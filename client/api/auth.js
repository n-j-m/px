import apiLoader from './apiLoader'
import app_settings from 'json!./app_settings.json'

export function isAuthed() {
  return new Promise((resolve, reject) => {
    apiLoader.auth()
      .then(() => {
        gapi.auth.authorize({
          client_id: CLIENT_ID,
          scope: app_settings.scopes.join(' '),
          immediate: true
        }, (authResult) => {
          if(authResult && authResult.error) {
            reject(authResult.error)
          }
          else {
            resolve(true)
          }
        })
        
      })
  })
}

export function authenticate() {
  return new Promise((resolve, reject) => {
    apiLoader.auth()
      .then(() => {
        gapi.auth.authorize({
          client_id: CLIENT_ID,
          scope: app_settings.scopes.join(' '),
          immediate: false
        }, (authResult) => {
          if (authResult && !authResult.error){
            resolve(authResult)
          }
          else {
            reject(authResult ? authResult.error : 'Unauthorized')
          }
        })
      })
  })
}