<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'productparam',
  data () {
    return {
      isFixed: false
    }
  },
  props: {
    title: String
  },
  methods: {
    initHeight () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // eslint-disable-next-line no-unneeded-ternary
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/reset.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
@import './../assets/scss/button.scss';
    .nav-bar{
        z-index: 10;
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: $colorG;
        &.is_fixed{
            width: 100%;
            position: fixed;
            top: 0;
            box-shadow: 0 5px 5px $colorE;
        }
        .container{
            @include flex();
            .pro-title{
                font-size: $fontH;
                color: $colorB;
                font-weight: bold;
            }
            .pro-param{
                span{
                    margin:0 10px ;
                }
                a{
                   color: $colorC;
                   &:last-child{
                       margin-right: 10px;
                   }
                }
                font-size: $fontJ;

            }
        }
    }
</style>
