import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: () => import('@/views/home/index.vue') },
      { path: 'detail/:id', component: () => import('@/views/detail/index.vue') },
      { path: 'cart', component: () => import('@/views/cart/index.vue') },
      { path: 'rfq', component: () => import('@/views/rfq/index.vue') },
      { path: 'order', component: () => import('@/views/order/index.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router