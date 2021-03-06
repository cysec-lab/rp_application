import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/getinfo',
    name: 'GetInfo',
    component: () => import('../views/GetInfoPage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/auth',
    name: 'Authenticate',
    component: () => import('../views/AuthenticatePage.vue')
  },
  {
    path: '/old',
    name: 'OldDelegatedRegister',
    component: () => import('../views/OldDelegatedRegisterPage')
  },
  {
    path: '/delegated',
    name: 'DelegatedResgister',
    component: () => import('../views/DelegatedRegisterPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
