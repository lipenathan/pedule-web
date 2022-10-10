import { createApp, VueElement } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

createApp(App).use(store).use(router).mount('#app');

import Vuelidate from "vuelidate";
Vue.use(Vuelidate)

app.use(Toast, options);
const options = {
    
};