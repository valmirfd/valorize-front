//import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue3-toastify/dist/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useAuthStore } from '@/stores/Auth';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    const token = authStore.getToken;

    if (token && !authStore.getUser && !authStore.loadingUser) {
        await authStore.fetchUser(router);
    }

    const isLoggedIn = authStore.getUser !== null;

    const isSuperadmin = authStore.isSuperadmin;

    const requireAuth = to.meta.requireAuth;

    const isSuperadminRoute = to.meta.isSuperadmin;

    if (isLoggedIn && (to.path === '/login' || to.path === '/register')) {
        return next('/');
    }

    if (!isLoggedIn && requireAuth) {
        return next('/login');
    }

    if (!isSuperadmin && isSuperadminRoute) {
        authStore.logout();
        return next('/login');
    }

    next();

});
