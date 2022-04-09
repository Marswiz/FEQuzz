import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes.js';

const router = createRouter({
    routes,
    history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.mount('#app');
