import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Shop from '../Shop.vue'
import Promotion from '../Promotion.vue'
import Signup from '../Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../Shop.vue')
    },
    {
      path: '/promotion',
      name: 'Promotion',
      component: () => import('../Promotion.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../Signup.vue')
    }
  ]
})

export default router