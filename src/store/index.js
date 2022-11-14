import { createStore } from 'vuex';

export default createStore({
  state: {
    usuario: null
  },
  getters: {
    usuario: (state) => {
      return state.usuario
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
