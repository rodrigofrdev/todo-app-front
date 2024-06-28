import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../views/AppLogin.vue'
import AppTodos from '../views/AppTodos.vue'
import AppSignup from '../views/AppSignup.vue'
import axios from 'axios'

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
      component: AppTodos,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: AppSignup
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      const response = await axios.get('http://localhost:3001/check-auth', {
        withCredentials: true // Enviar cookies para o backend
      });
      if (response.status === 200) {
        next(); // Permite a navegação
      } else {
        next({ name: 'login' }); // Redireciona para a tela de login se não autenticado
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      next({ name: 'login' }); // Em caso de erro, redireciona para a tela de login
    }
  } else {
    next(); // Se não requer autenticação, segue para a próxima rota
  }
});

export default router
