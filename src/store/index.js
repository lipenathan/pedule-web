import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default createStore({
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ],
  state: {
    usuario: null,
    isAuthenticaded: false,
    token: null
  },
  getters: {
    usuario: (state) => {
      return state.usuario
    },
    isAuthenticaded: (state) => {
      return state.usuario != null
    },
    token: (state) => {
      return state.token
    }
  },
  mutations: {
    usuario(state, usuario) {
      state.usuario = usuario
    },
    token(state, token) {
      state.token = token
    }
  },
  actions: {
    usuario(context, usuario) {
      context.commit('usuario', usuario)
    },
    token(context, token) {
      context.commit('token', token)
    }
  },
  modules: {
  },
});
