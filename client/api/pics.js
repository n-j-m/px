import apiLoader from './apiLoader'
import store from './store'
import { isAuthed } from './auth'

function resolveTitle(file) {
  const pic = store.get(file.id)
  return pic ? pic.title : file.name
}

function createPic(file) {
  const urlPrefix = file.webContentLink.split('?')[0]
  return {
    id: file.id,
    title: resolveTitle(file),
    thumbnailUrl: `https://drive.google.com/thumbnail?authuser=0&sz=w200-h150-p-k-nu&id=${file.id}`,
    // thumbnailUrl: file.thumbnailLink,
    url: `${urlPrefix}?id=${file.id}`
  }
}

export function getPics() {
  return new Promise((resolve, reject) => {
    return apiLoader.auth()
      .then(() => {
        isAuthed()
          .then(() => apiLoader.client())
          .then(() => {
            gapi.client.load('drive', 'v3')
              .then((o) => {
                gapi.client.drive.files.list({
                  'pageSize': 20,
                  'spaces': 'photos',
                  'fields': 'nextPageToken, files(*)'
                })
                  .execute(resp => {
                    console.log('resp:', resp)
                    resolve({
                      nextPageToken: resp.nextPageToken,
                      pics: resp.files.map(createPic)
                    })
                  })
              })
          })
        
      })
  })
}

export function getPic(id) {
  return fetch(`/api/pics/${id}`)
    .then(res => res.json())
}