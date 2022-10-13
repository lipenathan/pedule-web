import { createApp, VueElement } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate)
createApp(App).use(store).use(router).mount('#app');
