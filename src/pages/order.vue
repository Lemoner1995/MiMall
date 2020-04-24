<template>
    <div>
      <router-view></router-view>
      <service-bar></service-bar>
      <order-footer></order-footer>
    </div>
</template>

<script>
// import OrderHeader from './../components/OrderHeader'
import OrderFooter from './../components/OrderFooter'
import ServiceBar from './../components/ServiceBar'
export default {
  name: 'order',
  components: { OrderFooter, ServiceBar },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  mounted () {
    // eslint-disable-next-line prefer-const
    let path = this.$route.path
    if (path === '/order/confirm') {
      this.title = '订单确认'
      this.tip = '请认真填写收获地址'
    } else if (path === '/order/list') {
      this.title = '订单列表'
      this.tip = '请谨防钓鱼链接呼噢诈骗电话，点击了解更多>'
    } else if (path === '/order/pay') {
      this.title = '订单支付'
      this.tip = '请谨防钓鱼链接呼噢诈骗电话，点击了解更多'
    } else if (path === '/order/alipay') {
      this.title = '订单支付'
      this.tip = '请谨防钓鱼链接呼噢诈骗电话，点击了解更多'
    }
  }
}
</script>
