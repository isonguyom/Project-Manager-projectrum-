import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'


const routes = [{
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Dashboard,
    children: [{
      path: 'dashboard',
      //this is where the main work lies
      name: 'Dashboard',
      component: Dashboard,

    },
    {
      path: 'about',
      //this is where the main work lies
      name: 'About',
      component: About,

    }
  ]

  },
  {
    path: '/header',
    name: 'Header',
    component: () => import('../components/Header.vue')
  },
  {
    path: '/sidemenu',
    name: 'Sidemenu',
    component: () => import('../components/Sidemenu.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router