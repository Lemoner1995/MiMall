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
import storage from './storage/index'
// import HelloWorld from './components/HelloWorld'
// import axios from 'axios'
export default {
  name: 'app',
  // data () {
  //   return {
  //     age: 30,
  //     message: 'Hello'

  //   }
  // },
  // mounted () {
  //   // let url = ""
  //   // axios.get()
  // },
  components: {
  },
  mounted () {
    storage.setItem('a', 1)
    // storage.setItem('user', { a: 1 })
    // storage.setItem('abc', { a: 1 }, 'user')
    // storage.clear('a')
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
