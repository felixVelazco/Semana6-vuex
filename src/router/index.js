import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import AboutView from '../views/AboutView.vue'
import EstilosView from '../views/EstilosView.vue'
import PedidoView from '../views/PedidoView.vue'
import ContactoView from '../views/ContactoView.vue'
import PasteleroView from '../views/PasteleroView.vue'




//component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    
  },
  {
    path: '/estilos',
    name: 'estilos',
    component: EstilosView
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: PedidoView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: PasteleroView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
