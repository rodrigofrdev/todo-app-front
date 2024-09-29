import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../views/AppLogin.vue'
import AppSignup from '../views/AppSignup.vue'
import AppTodos from '../views/AppTodos.vue'
import axios from 'axios'

const router = createRouter({
  // Get the base URL from the environment variables
  // DEV: http://localhost:8080/
  // PROD: http://todo-app-front.s3-website-sa-east-1.amazonaws.com/ (sample)
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: AppLogin
    },
    {
      path: '/signup',
      name: 'signup',
      component: AppSignup
    },
    {
      path: '/todos',
      name: 'todos',
      component: AppTodos,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) { // Need authentication
    try {
      const response = await axios.get('http://localhost:3001/check-auth', {
        withCredentials: true // Allows sending cookies to the backend
      });
      if (response.status === 200) {
        next(); // Authenticated
      } else {
        next({ name: 'login' }); // Not authenticated
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      next({ name: 'login' });
    }
  } else {
    next(); // No authentication required
  }
});

export default router
