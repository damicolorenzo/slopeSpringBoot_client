import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import LoggedHome from '@/views/LoggedHomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/home',
    name: 'loggedHome',
    component: LoggedHome
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: Bookings
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})  