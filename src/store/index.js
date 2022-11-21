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
    isAuthenticaded: false
  },
  getters: {
    usuario: (state) => {
      return state.usuario
    },
    isAuthenticaded: (state) => {
      return state.usuario != null
    }
  },
  mutations: {
    usuario(state, usuario) {
      state.usuario = usuario
    }
  },
  actions: {
    usuario(context, usuario) {
      context.commit('usuario', usuario)
    }
  },
  modules: {
  },
});
