import { createApp, VueElement } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css';      //theme
import 'primevue/resources/primevue.min.css';       //core css
import 'primeicons/primeicons.css';

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.mount('#app');

const options = {
  
};
const app = createApp();

app.use(Toast, options);
app.component('Toast', Toast)