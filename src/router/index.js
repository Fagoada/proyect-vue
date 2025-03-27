import { createRouter, createWebHistory } from 'vue-router'
import ListaDeTareas from '../components/ListaDeTareas.vue'
import SideBar from '@/components/SideBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
/*     {
      path: '/',
      name: 'home',
      component: SideBar,
    },  */
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: () => import('../components/ListaDeTareas.vue'),
    }, 
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue'),
    }, 
  ],
})

export default router
