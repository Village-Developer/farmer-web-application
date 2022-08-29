import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/farmer'
  },
  {
    path: '/farmer',
    component: () => import('../components/layout/Layout.vue'),
    children: [
      {
        path: 'user_manage',
        component: () => import('../views/UserManageView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/ProductView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
