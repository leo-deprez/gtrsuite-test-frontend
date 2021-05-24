import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/responsive',
    name: 'Responsive',
    component: () => import('@/views/Responsive.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/Table.vue'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/Store.vue'),
  },
  {
    path: '/routing',
    name: 'Routing',
    component: () => import('@/views/Routing.vue'),
  },
  {
    path: '/gmap',
    name: 'Gmap',
    component: () => import('@/views/Gmap.vue'),
  },
  {
    path: '/seo',
    name: 'Seo',
    component: () => import('@/views/Seo.vue'),
  },
  {
    path: '/tests',
    name: 'Tests',
    component: () => import('@/views/Tests.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
