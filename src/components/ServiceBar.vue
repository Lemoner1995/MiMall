<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退回</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-postfree"></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
    .service{
        padding: 33px 0;
        color: #666666;
        font-size: 16px;
        li{
            display: inline-block;
            width: 24.8%;
            text-align: center;
            border-right: 1px solid #E5E5E5;
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
