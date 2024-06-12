import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../views/AppLogin.vue'
import AppTodos from '../views/AppTodos.vue'
import AppSignup from '../views/AppSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: AppLogin
    },
    {
      path: '/todos',
      name: 'todos',
      component: AppTodos
    },
    {
      path: '/signup',
      name: 'signup',
      component: AppSignup
    }
  ]
})

export default router
