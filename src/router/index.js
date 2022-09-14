import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../layout/AppHeader'
import Footer from '../layout/AppFooter'
import Home from '../views/ApiDocumentView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/farmer/login'
  },
  {
    path: '/farmer/api-document',
    name: 'home',
    components: {
      header: Header,
      default: Home,
      footer: Footer
    }
  },
  {
    path: '/farmer/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/farmer/register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
