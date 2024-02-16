import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
