import { createRouter, createWebHistory } from 'vue-router';
import Cronograma from '@/views/Cronograma.vue'
import Atividades from '@/views/Atividades.vue'
import Materias from '@/views/Materias.vue'
import Anotacoes from '@/views/Anotacoes.vue'
import Cursos from '@/views/Cursos.vue'
import TelaCadastro from '@/views/Cadastro.vue'
import Login from '@/views/Login.vue'
import Teste from '@/views/Teste.vue'
import Req from '@/views/Req.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cronograma',
    name: 'cronograma',
    component: Cronograma
  },
  {
    path: '/atividades',
    name: 'atividades',
    component: Atividades
  },
  {
    path: '/materias',
    name: 'materias',
    component: Materias
  },
  {
    path: '/anotacoes',
    name: 'anotacoes',
    component: Anotacoes
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: TelaCadastro,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function isRestrictedPage(pageName) {
  let resctricted = false
  resctricted = pageName !== "login"
  resctricted = resctricted && pageName !== "cadastro"
  return resctricted
}

router.beforeEach((to, from, next) => {
  const authenticated = store.getters.isAuthenticaded

  if (isRestrictedPage(to.name) && !authenticated) next({ name: "login" })
  else if (to.name === "login" && authenticated) next({ name: "cronograma" })
  else next()
})

export default router;
