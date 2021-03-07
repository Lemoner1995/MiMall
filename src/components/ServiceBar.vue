<template>
    <div class="service">
        <div class="media_title">
            <span>Social Media</span>
        </div>
        <div class="container">
            <ul>
                <li><div @click="pagejump1" class="bz bz1"></div></li>
                <li><div @click="pagejump2" class="bz bz2"></div></li>
                <li><div @click="pagejump3" class="bz bz3"></div></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'service-bar',
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
@import './../assets/scss/mixin.scss';
    .service{
        display: flex;
        flex-direction: column;
        .media_title{
            width: 1226px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: center;
            font-size: 36px;
            color: #A03726;
            padding: 10px 0;
            box-sizing: border-box;
            span{
                position: relative;
                &:before{
                    margin-right: 24px;
                    margin-top: -4px;
                    box-sizing: inherit;
                    background: currentColor;
                    height: 1px;
                    content: "";
                    position: absolute;
                    top: .70em;
                    width: 20vw;
                    right: 100%;
                }
                &::after{
                    margin-left: 24px;
                    margin-top: -4px;
                    box-sizing: inherit;
                    background: currentColor;
                    height: 1px;
                    content: "";
                    position: absolute;
                    top: .70em;
                    width: 20vw;
                    left: 100%;
                }
            }
        }
        .container{
            display: flex;
            justify-content: center;
        }
        padding: 33px 0;
        color: #666666;
        font-size: 16px;
        li{
            display: inline-block;
            width: 100px;
            text-align: center;
            // border-right: 1px solid #E5E5E5;
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
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-right: 8px;
            }
            .icon-setting{
                @include bgImg(20px,20px,'/imgs/icon-setting.png');
                vertical-align:middle;
            }
            .icon-7day{
                @include bgImg(20px,20px,'/imgs/icon-7day.png');
                vertical-align: middle;
            }
            .icon-15day{
                @include bgImg(20px,20px,'/imgs/icon-15day.png');
                vertical-align: middle;
            }
            .icon-postfree{
                @include bgImg(20px,20px,'/imgs/icon-post.png');
                vertical-align: middle;
            }
        }
    }
</style>
