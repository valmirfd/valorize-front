import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import { churchesRoutes } from '@/routes/churches';
import { loginRoutes } from '@/routes/login';
import { registerRoutes } from '@/routes/register';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requireAuth: true,
      }
    },

    ...churchesRoutes,
    ...loginRoutes,
    ...registerRoutes,
  ],
})

export default router
