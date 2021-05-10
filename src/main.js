import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入axios
import axiosService from './axios/axios'

// 将新建的axios实例挂载到vue的原型对象上
// 这样配置后，每一个vue的组件，都可以通过this.$http发起http请求
Vue.prototype.$http = axiosService

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
