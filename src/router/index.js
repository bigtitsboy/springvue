import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Head from '@/views/Head'
import Sort from '@/components/Sort'
import BookDetail from '@/components/BookDetail'
import Login from '@/components/Login'
import Join from '@/components/Join'
import Food from '@/components/Food'
import ShoppingCar from '@/components/ShoppingCar'
import BookCar from '@/components/BookCar'

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
      },
      {
        path: 'food',
        name: 'food',
        component: Food
      },
      {
        path: 'car',
        name: 'car',
        component: ShoppingCar
      },
      {
        path: 'bookcar',
        name: 'bookcar',
        component: BookCar
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/join',
    name: 'join',
    component: Join
  }
]

const router = new VueRouter({
  routes
})

export default router
