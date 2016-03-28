import { PROCESSING, ERROR } from '../mutation-types'

const initialState = {
  processing: 0,
  error: null
}

const mutations = {
  [PROCESSING](state, queued) {
    state.processing += queued
  },
  [ERROR](state, error) {
    state.error = error
  }
}

export default {
  state: initialState,
  mutations
}