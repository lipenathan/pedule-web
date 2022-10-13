import { createApp, VueElement } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
   
};

app.use(Toast, options);