import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import env from './env'
// 根据前端的跨域方式做调整

// axios.defaults.baseURL = 'http://test-www.imooc.com/api'
// mock 开关
const mock = false
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
  const path = location.hash
  // eslint-disable-next-line eqeqeq
  if (res.status == 0) {
    return res.data
  // eslint-disable-next-line eqeqeq
  } else if (res.status == 10) {
    if (path !== '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    alert(res.msg)
    return Promise.reject(res)
  }
}, (error) => {
  // eslint-disable-next-line prefer-const
  let res = error.response
  alert(res.data.message)
  return Promise.reject(error)
})
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: './imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
