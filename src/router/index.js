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
