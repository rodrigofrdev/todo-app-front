import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../views/AppLogin.vue'
import AppTodos from '../views/AppTodos.vue'

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
    }
  ]
})

export default router
