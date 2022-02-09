import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    name: 'Header',
    component: () => import( '../components/Header.vue')
  },
  {
    path: '/sidemenu',
    name: 'Sidemenu',
    component: () => import( '../components/Sidemenu.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
