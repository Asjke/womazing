import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/mainPage')
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/shopPage')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/aboutPage')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/contactsPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
