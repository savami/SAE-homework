import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import EntryView from '../views/Entry.vue'
import SingleUser from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/entry',
    name: 'EntryView',
    component: EntryView
  },
  {
    path: '/user/:id/',
    name: 'SingleUser',
    component: SingleUser
  },
  {
    path: '/user/:id/action/:what',
    name: 'SingleUser',
    component: SingleUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
