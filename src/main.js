import { createApp, VueElement } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';

<<<<<<< HEAD
Vue.use(Vuelidate)
=======

>>>>>>> f617552322b0d62f97271580534d76c2866d540e
createApp(App).use(store).use(router).mount('#app');

