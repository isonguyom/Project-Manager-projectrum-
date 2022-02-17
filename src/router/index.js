import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Tasks from '../views/Tasks.vue'
import Teams from '../views/Teams.vue'
import Calendar from '../views/Calendar.vue'
import Messages from '../views/Messages.vue'
import Files from '../views/Files.vue'
import Settings from '../views/Settings.vue'


const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,

      },
      {
        path: 'projects',
        name: 'Projects',
        component: Projects,

      },
      {
        path: 'tasks',
        name: 'Tasks',
        component: Tasks,

      },
      {
        path: 'teams',
        name: 'Teams',
        component: Teams,

      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar,

      },
      {
        path: 'messages',
        name: 'Messages',
        component: Messages,

      },
      {
        path: 'files',
        name: 'Files',
        component: Files,

      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,

      },
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