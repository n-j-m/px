import { RECEIVE_PICS } from '../mutation-types'

const initialState = {
  nextPageToken: null,
  pics: []
}

const mutations = {
  [RECEIVE_PICS](state, pics) {
    state.nextPageToken = pics.nextPageToken
    state.pics = pics.pics
  }
}

export default {
  state: initialState,
  mutations
}