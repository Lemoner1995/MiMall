<template>
    <div class="footer">
        <div class="footer-logo">
          <img src="/imgs/logo-footer.png" alt="">
          <p>小米商城</p>
        </div>
        <div class="footer-link">
          <a href="https://www.baidu.com" target="_blank">河畔一角主页</a>
          <a href="https://www.baidu.com" target="_blank">Vue全栈课程</a>
          <a href="https://www.baidu.com" target="_blank">React全家桶课程</a>
          <a href="https://www.baidu.com" target="_blank">微信支付专项课程(H5+小程序+Node+Mongo)</a>
        </div>
        <div class="copyright">© <span class="domain">mi.com</span> 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
    </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
.footer{
  height: 234px;
  border-top: 4px solid #FF6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    .img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    margin-bottom: 10px;
    a{
      color: #999999;
      display: inline-block;
      position: relative;
      margin:0 10px;
      &::before{
        content: '';
        position:absolute;
        top: 4px;
        right: -10px;
        border-left: 1px solid #999999;
        height: 16px;
        width: 1px;
      }
      &:last-child::before{
        display: none;
      }
    }
  }
  .copyright{
    .domain{
      color: #FF6600;
    }
  }
}
</style>
