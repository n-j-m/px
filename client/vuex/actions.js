import api from 'api'
import { PROCESSING, RECEIVE_PICS, ERROR } from './mutation-types'

export function retrievePics({dispatch}) {
  dispatch(PROCESSING, 1)
  api.getPics()
    .then(data => {
      dispatch(RECEIVE_PICS, data)
      dispatch(PROCESSING, -1)
    })
    .catch(error => {
      dispatch(ERROR, error)
      dispatch(PROCESSING, -1)
    })
}

export function getPic({dispatch}, id) {
  dispatch(PROCESSING, 1)
  api.getPic(id)
    .then(data => {
      dispatch(RECEIVE_PIC, data)
      dispatch(PROCESSING, -1)
    })
    .catch(error => {
      dispatch(ERROR, error)
      dispatch(PROCESSING, -1)
    })
}