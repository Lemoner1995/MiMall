import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
// import env from './env'
// 根据前端的跨域方式做调整

// axios.defaults.baseURL = 'http://test-www.imooc.com/api'
// mock 开关
const mock = true
if (mock) {
  require('./mock/api')
}
axios.defaults.timeout = 8000
axios.defaults.baseURL = '/api'
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  // eslint-disable-next-line prefer-const
  let res = response.data
  // eslint-disable-next-line eqeqeq
  if (res.status == 0) {
    return res.data
  // eslint-disable-next-line eqeqeq
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
