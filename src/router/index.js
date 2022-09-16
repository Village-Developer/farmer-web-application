import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../layout/AppHeader'
import Footer from '../layout/AppFooter'
import ApiDocument from '../views/ApiDocumentView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/farmer/login'
  },
  {
    path: '/farmer/api-document',
    name: 'api-document',
    components: {
      header: Header,
      default: ApiDocument,
      footer: Footer
    }
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
