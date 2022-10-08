import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Cronograma from '@/views/Cronograma.vue'
import Atividades from '@/views/Atividades.vue'
import Materias from '@/views/Materias.vue'
import Anotacoes from '@/views/Anotacoes.vue'
import Cursos from '@/views/Cursos.vue'
import TelaCadastro from '@/views/Cadastro.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
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
    component: TelaCadastro
  }  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
