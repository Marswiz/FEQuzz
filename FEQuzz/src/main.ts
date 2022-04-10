import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes.js';
import { createPinia } from 'pinia';

const router = createRouter({
    routes,
    history: createWebHistory(),
});

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
