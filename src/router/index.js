import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Head from '@/views/Head'
import Sort from '@/components/Sort'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/main'
  },
  {
    path: '/home',
    component: Head,
    children: [
      {
        path: 'main',
        component: Home
      },
      {
        path: 'sort',
        component: Sort
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
