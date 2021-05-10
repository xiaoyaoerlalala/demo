// 这里面封装了对axios所有配置

// 引入axios
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 注意要引入css样式文件

// 调用axios.create()方法，创建一个axios实例
// 然后将它暴露出去，在main.js中挂载到vue实例上
const axiosService = axios.create({
  // 配置请求的根路径
  baseURL: 'http://localhost:8080/',
  // 表示跨域请求时是否需要使用凭证,可根据情况自己设定
  // withCredentials: true,
  // 设置请求超时时间，单位：ms
  timeout: 30000
})

// 进度条的配置项：ease可以设置css3动画，如ease，linear；speed是进度条从开始到结束的耗时（其实这里设置时间和定时器一样，为了看得更明显）
// NProgress.configure({ease:'linear',speed: 500, showSpinner: false});
// 进度环显示隐藏
NProgress.configure({showSpinner: false})

// axios请求拦截(相当于一个预处理的过程)
// 调用axios中的interceptors属性，此属性中有一个request成员
// request就是请求拦截器，通过use()为请求拦截器挂载一个回调函数
// 当客户端通过axios向服务端发送请求前，会先调用use()的回调函数，进行预处理
axiosService.interceptors.request.use(config => {
  // config是请求对象
  NProgress.start() // 进度条开始

  // 为请求头对象，添加 Token 验证的 Authorization 字段
  // 这个字段应该是登录后后台返回的，然后由login.vue存到localStorage中
  config.headers.Authorization = window.localStorage.getItem('token')

  return config
},
  error => {
    return Promise.reject(error)
  })

//http response 拦截器
axiosService.interceptors.response.use(
  response => {
    // respone是响应对象
    NProgress.done() // 进度条结束
    return response
  }
)

export default axiosService
