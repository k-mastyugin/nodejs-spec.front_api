import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    component: () => import('../views/All.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/change',
    name: 'Put',
    component: () => import('../views/Put.vue')
  },
  {
    path: '/delete',
    name: 'Delete',
    component: () => import('../views/Delete.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
