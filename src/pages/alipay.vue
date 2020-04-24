<template>
    <div>
      <order-header title="订单支付">
        <template v-slot:tip>
          <span>请谨防钓鱼链接呼噢诈骗电话，点击了解更多</span>
        </template>
      </order-header>
      <div class="ali-pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
      </div>
    </div>
</template>

<script>
import Loading from '../components/Loading'
import OrderHeader from './../components/OrderHeader'
export default {
  name: 'alipay',
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  components: { Loading, OrderHeader },
  methods: {
    paySubmit () {
      this.axios.post('/pay', { orderId: this.orderId, orderName: 'Vue高仿小米商城', amount: '0.01', payType: 1 }).then((res) => {
        this.content = res.content
        // eslint-disable-next-line func-call-spacing
        setTimeout (() => {
          document.forms[0].submit()
        }, 100)
      })
    }
  },
  mounted () {
    this.paySubmit()
  }
}
</script>
