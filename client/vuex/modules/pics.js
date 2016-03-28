import { RECEIVE_PICS } from '../mutation-types'

const initialState = {
  pics: []
}

const mutations = {
  [RECEIVE_PICS](state, pics) {
    state.pics = pics
  }
}

export default {
  state: initialState,
  mutations
}