import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../layout/AppHeader'
import Footer from '../layout/AppFooter'
import ApiDocument from '../views/ApiDocumentView'
import axios from 'axios'

Vue.use(VueRouter)

const jwtVerify = (to, from, next) => {
  axios.post('http://localhost:9000/api/v1/verify', { token: localStorage.getItem('token') })
    .then(response => {
      next()
    }).catch(() => {
      next('/farmer/login')
    })
}

const routes = [
  {
    path: '/',
    redirect: '/farmer/api-document'
  },
  {
    path: '/farmer/api-document',
    name: 'api-document',
    components: {
      header: Header,
      default: ApiDocument,
      footer: Footer
    },
    beforeEnter: jwtVerify
  },
  {
    path: '/farmer/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/farmer/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
