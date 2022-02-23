import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/login/LoginPage')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
