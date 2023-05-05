import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import CadastroDiversos from '../components/CadastroDiversos.vue'
import DiversosView from '../views/DiversosView.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/cadastro-diversos',
    name: 'cadastro-diversos',
    component: CadastroDiversos
  },
  {
    path: '/diversos-view',
    name: 'diversos-view',
    component: DiversosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
