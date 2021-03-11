<template>
    <div class="about">
        <div class="media_title">
            <span>About Us</span>
        </div>
        <div class="container">
            <div v-for="(e,index) in imgdata" :key="index">
                <!-- <div class="rowcontent" :style="index%2==0?'':'flex-direction: row-reverse;'"> -->
                <div class="rowcontent" :style="{flexDirection:(index%2==0?'':'row-reverse'),paddingBottom:(index==3?'0px':'')}">
                    <div class="row_img">
                        <img :src="e.url" alt="">
                    </div>
                    <div class="row_text">
                        <div class="context_area">
                            <span>Mefe面料纺织品针织面料生产商</span>
                            <span>凭借多年的针织面料生产经验，现已成为出口市场。意大利-西班牙-希腊-罗曼尼亚-俄罗斯-突尼斯...意大利-西班牙-希腊-罗曼尼亚-俄罗斯-突尼斯...</span>
                            <!-- <span></span> -->
                        </div>
                        <div class="button_area">
                            <!-- <el-button>了解更多</el-button> -->
                            <div class="frozen_btn">
                                <button class="purple"><span>了解更多</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'about-bar',
  data () {
    return {
      imgdata: [
        { url: '/imgs/fabric/1.jpg' },
        { url: '/imgs/fabric/2.jpg' },
        { url: '/imgs/fabric/3.jpg' },
        { url: '/imgs/fabric/4.jpg' }
      ]
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
    .about{
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
            margin-bottom: 40px;
            span{
                text-align: center;
                width: 210px;
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
                    width: 24vw;
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
                    width: 24vw;
                    left: 100%;
                }
            }
        }
        .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .rowcontent{
                width: 100%;
                display: flex;
                padding: 0 24px 48px 24px;
                .row_img{
                    width: 600px;
                    height: 300px;
                    // @include bgImg(600px,300px,'/imgs/fabric/1.jpg');
                }
                .row_text{
                    padding: 0 24px;
                    display: flex;
                    flex-direction: column;
                    align-self: center;
                    flex: 1;
                    .context_area{
                        text-align: center;
                        margin-bottom: 24px;
                            // padding: 140px 0 20px 20px;
                            // width: 400px;
                        span{
                                display: inline-block;
                                color: #5e5e5e;
                                text-align: center;
                                padding: 10px 0;
                                font-size: 16px;
                            &:first-child{
                                color: #1B1B1B;
                                overflow-wrap: break-word;
                                white-space: pre-line;
                                letter-spacing: normal;
                                line-height: 30px;
                                font-size: 24px;
                            }
                            &:nth-child(2){
                                display: flex;
                                justify-content: center;
                            }
                            &:last-child{
                                display: flex;
                                justify-content: center;
                                // font-size: 20px;
                            }
                        }
                    }
                    .button_area{
                        display: flex;
                        justify-content: center;
                        .frozen_btn{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            // height: 100vh;
                        }
                        button{
                            padding: 15px 50px;
                            border: 0;
                            margin: 20px;
                            text-transform: uppercase;
                            font-size: 16px;
                            font-weight: bold;
                            border-radius: 50px;
                            color: white;
                            outline: none;
                            position: relative;
                        }
                        button::before{
                            content: '';
                            display: block;
                            background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.4) 50%);
                            background-size: 210% 100%;
                            background-position: right bottom ;
                            height: 100%;
                            width: 100%;
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            border-radius: 50px;
                            transition: all 1s;
                            -webkit-transition: all 1s;
                        }
                        .green{
                            cursor: pointer;
                            background-image: linear-gradient(to right, #25aae1, #40e495);
                            box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
                        }
                        .purple{
                            cursor: pointer;
                            background-image: linear-gradient(to right, #e61111, #852D91);
                            box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
                        }
                        .purple:hover::before{
                            background-position: left bottom;
                        }
                        .green:hover::before{
                            background-position: left bottom;
                        }
                    }
                }
                .rowcontent:last-child{
                    padding-bottom: 0px;
                }
            }
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
