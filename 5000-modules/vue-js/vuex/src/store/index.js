// Practice of VueX states & mutations

import { createStore } from 'vuex'

export default createStore({
  state: {
    randomState: "Hello",
    loggedIn: false,
    failedLoginAttempts: 0
  },
  getters: {
  },
  mutations: {
    failedLoginCounter(state) {
      state.failedLoginAttempts++
    },
    loginStateTrue(state) {
      state.loggedIn = true;
    },
    loginStateFalse(state) {
      state.loggedIn = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
