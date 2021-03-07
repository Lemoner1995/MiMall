<template>
    <div class="footer">
        <div class="footer-logo">
          <div class="footre_logogroup">
            <div @click="pagejump1" class="bz bz1"></div>
            <!-- <div @click="pagejump2" class="bz bz2"></div>
            <div @click="pagejump3" class="bz bz3"></div> -->
          </div>
          <!-- <img src="/imgs/logo-footer.png" alt=""> -->
          <p>Copy Rıght © 2021 JACOB FABRIC TEXTILE MANUFACTURING - All rights reserved.</p>
        </div>
        <div class="footer-link">
          <a href="https://www.baidu.com" target="_blank">泽西面料</a>
          <a href="https://www.baidu.com" target="_blank">印花面料</a>
          <a href="https://www.baidu.com" target="_blank">开襟面料</a>
          <a href="https://www.baidu.com" target="_blank">绒布面料</a>
        </div>
        <div class="footer-link">
          <a href="http://www.texnet.com.cn" target="_blank">中国纺织网</a>
          <a href="http://www.efu.com.cn/" target="_blank">中国服装网</a>
          <a href="http://cn.toocle.com/" target="_blank">生意宝</a>
          <!-- <a href="https://www.baidu.com" target="_blank">绒布面料</a> -->
        </div>
        <!-- <div class="copyright">© <span class="domain">mi.com</span> 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div> -->
    </div>
</template>

<script>
export default {
  name: 'nav-footer',
  data () {
    return {
      url1: 'https://www.bilibili.com/',
      url2: 'https://www.acfun.cn/',
      url3: 'http://www.ubisoft.com'
    }
  },
  methods: {
    pagejump1 () {
      window.open(this.url1)
    },
    pagejump2 () {
      window.open(this.url2)
    },
    pagejump3 () {
      window.open(this.url3)
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.footer{
  height: 234px;
  // border-top: 4px solid #999;
  background-color: #fff;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    display: flex;
    flex-direction: column;
    .footre_logogroup{
      padding: 20px 0 10px 0;
      height: 60px;
      display: flex;
      justify-content: center;
      .bz{
        cursor: pointer;
        padding: 0 20px;
      }
      .bz1{
        @include bgImg(50px,50px,'/imgs/b.jpg');
      }
      .bz2{
        @include bgImg(50px,50px,'/imgs/acfun.jpg');
      }
      .bz3{
        @include bgImg(50px,50px,'/imgs/ubi.jpg');
      }
    }
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
      &:hover{
        color: #FF6600;
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
