<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <!-- <HelloWorld :msg=message></HelloWorld> -->
  </div>
</template>
<script>
// import storage from './storage/index'
// import HelloWorld from './components/HelloWorld'
// import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      res: {}

    }
  },
  // mounted () {
  //   // let url = ""
  //   // axios.get()
  // },
  components: {
  },
  methods: {
    getUser () {
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  },
  mounted () {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    }
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // 本地集成mockjs实现数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })
    // storage.setItem('a', 1)
    // storage.setItem('user', { a: 1 })
    // storage.setItem('abc', { a: 1 }, 'user')
    // storage.clear('a')
  }
}
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
@import './assets/scss/base.scss';
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/modal.scss';
@import './assets/scss/button.scss';
</style>
