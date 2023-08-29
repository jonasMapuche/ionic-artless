import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import ('./app/home/home.page.vue')
  },
  {
    path: '/bot',
    component: () => import ('./app/bot/bot.page.vue')
  },
  {
    path: '/setting',
    component: () => import ('./app/setting/setting.page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
