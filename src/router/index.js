import { createRouter, createWebHashHistory } from 'vue-router'
const home = () => import('../views/HomePage')
const login = () => import('../views/LoginPage')

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
