import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import SignUpForm from '../pages/SignUpForm.vue'
import TransferFunds from '../pages/TransferFunds.vue'
import Chart from '../pages/Chart.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUpForm,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contacts',
      component: ContactIndex,
    },
    {
      path: '/contact/:id',
      name: 'details',
      component: ContactDetails,
      children: [
        {
          path: '/contact/:id/transaction',
          component: TransferFunds
        },
      ]
    },
    {
      path: '/contact/edit/:id?',
      name: 'edit',
      component: ContactEdit,
    },
    {
      path: '/stats',
      name: 'stats',
      component: Chart,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../pages/AboutView.vue'),
    // },
  ],
})

export default router
