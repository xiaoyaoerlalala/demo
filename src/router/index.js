import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 注意要引入css样式文件

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
  },
  {
    path: '/nprogress',
    name: 'Nprogress',
    component: () => import('@/views/4.Nprogress.vue')
  }
]

const router = new VueRouter({
  routes
})

// 进度条的配置项：ease可以设置css3动画，如ease，linear；speed是进度条从开始到结束的耗时（其实这里设置时间和定时器一样，为了看得更明显）
// NProgress.configure({ease:'linear',speed: 500});
router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始
  // 这里为了看得清晰一些加了一个定时器，正式使用请去掉
  // 解掉定时器注释，删掉最后的next()就可以看到效果
  // setTimeout(() => {
  //   next()
  // }, 5000)
  next()
})

router.afterEach(() => {
  console.log('222222')
  NProgress.done() // 进度条结束
})

export default router
