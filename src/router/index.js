import Vue from 'vue'
import VueRouter from 'vue-router'

// 保存原来的push函数
const routerPush = VueRouter.prototype.push
// 重写push函数
VueRouter.prototype.push = function push (location) {
  // 这个语句用来解决报错
  // 调用原来的push函数，并捕获异常
  return routerPush.call(this, location).catch(error => error)
}
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
  {
    path: '/router',
    name: 'Router',
    component: () => import('@/views/3.Router.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
