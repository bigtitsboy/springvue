import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Head from '@/views/Head'
import Sort from '@/components/Sort'
import BookDetail from '@/components/BookDetail'

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
        name: 'home',
        component: Home
      },
      {
        path: 'sort',
        name: 'sort',
        component: Sort
      },
      {
        path: 'book',
        name: 'book',
        component: BookDetail
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
