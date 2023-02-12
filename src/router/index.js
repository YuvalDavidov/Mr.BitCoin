import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contacts from '../views/ContactsIndex.vue'
import Details from '../views/ContactDetails.vue'
import stats from '../views/StatisticsPage.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/contact',
      component: Contacts
    },
    {
      path: '/contact/:_id',
      component: Details
    },
    {
      path: '/stats',
      component: stats
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
}
const router = createRouter(routerOptions)

export default router
