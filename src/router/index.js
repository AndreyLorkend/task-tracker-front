import { createRouter, createWebHistory } from 'vue-router'

const DashboardLayout = () => import('/src/components/DashboardLayout.vue')

const routes = [
  {
    path: '/', 
    name: 'dashboard',
    component: DashboardLayout
  }
]

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router