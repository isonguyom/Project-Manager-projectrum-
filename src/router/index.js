import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Dashboard from '../views/Dashboard.vue'
// Projects section
import Projects from '../views/projects/Projects.vue'
import PendingProjects from '../views/projects/Pending.vue'
import CompletedProjects from '../views/projects/Completed.vue'
import ArchiveProjects from '../views/projects/Archive.vue'
import TrashProjects from '../views/projects/Trash.vue'
// Tasks Section
import Tasks from '../views/tasks/Tasks.vue'
import PendingTasks from '../views/tasks/Pending.vue'
import CompletedTasks from '../views/tasks/Completed.vue'
import ArchiveTasks from '../views/tasks/Archive.vue'
import TrashTasks from '../views/tasks/Trash.vue'
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
        children: [{
            path: '',
            name: 'PendingProjects',
            component: PendingProjects,
          },
          {
            path: 'completed',
            name: 'CompletedProjects',
            component: CompletedProjects,
          },
          {
            path: 'archive',
            name: 'ArchiveProjects',
            component: ArchiveProjects,
          },
          {
            path: 'trash',
            name: 'TrashProjects',
            component: TrashProjects,
          },

        ]
      },
      {
        path: 'tasks',
        name: 'Tasks',
        component: Tasks,
        children: [{
          path: '',
          name: 'PendingTasks',
          component: PendingTasks,
        },
        {
          path: 'completed',
          name: 'CompletedTasks',
          component: CompletedTasks,
        },
        {
          path: 'archive',
          name: 'ArchiveTasks',
          component: ArchiveTasks,
        },
        {
          path: 'trash',
          name: 'TrashTasks',
          component: TrashTasks,
        },

      ]
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