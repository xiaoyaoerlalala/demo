import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ckeditor',
    name: 'Ckeditor',
    component: () => import('@/views/1.Ckeditor.vue')
  },
  {
    path: '/simulation',
    name: 'Simulation',
    component: () => import('@/views/2.Simulation.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
