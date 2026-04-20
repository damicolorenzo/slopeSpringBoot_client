import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import LoggedHome from '@/views/LoggedHomeView.vue'
import Bookings from '@/components/Bookings.vue'
import Profile from '@/components/Profile.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/registration', name: 'registration', component: RegistrationView },
  { path: '/home', name: 'loggedHome', component: LoggedHome },
  { path: '/bookings', name: 'bookings', component: Bookings },
  { path: '/profile', name: 'profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export function setupRouterGuards(pinia) {
  const auth = useAuthStore(pinia)
  const publicRoutes = ['login', 'registration', 'home']

  router.beforeEach((to) => {
    const publicRoutes = ['login', 'registration', 'home']
  
    if (!publicRoutes.includes(to.name) && !auth.isLoggedIn()) {
      return { name: 'login' }
    }
  
    return true
  })
  
}

export default router