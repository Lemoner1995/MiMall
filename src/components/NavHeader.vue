<template>
    <div class="header">
      <div class="nav-topbar">
        <div class="container">
          <div class="topbar-menu">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MUI</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="topbar-user">
            <a href="javascript:;" v-if="username">{{username}}</a>
            <a href="javascript:;" v-if="!username" @click="login">登录</a>
            <a href="javascript:;" v-if="username">我的订单</a>
            <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
          </div>
        </div>
      </div>
      <div class="nav-header">
        <div class="container">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <div class="header-menu">
            <div class="item-menu">
              <span>小米手机</span>
              <div class="children">
                <ul>
                  <li class="product" v-for="(item,index) in phoneList" :key="index">
                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                      <div class="pro-img">
                        <img :src="item.mainImage" alt="item.subtitle">
                      </div>
                      <div class="pro-name">{{item.name}}</div>
                      <div class="pro-price">{{item.price | currency}}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>红米手机</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                      </div>
                      <div class="pro-name">RedMi K30</div>
                      <div class="pro-price">1599元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                      </div>
                      <div class="pro-name">RedMi K30 5G</div>
                      <div class="pro-price">1999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/398311b2e6f47ac324ba0421a0ac1b80.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                      </div>
                      <div class="pro-name">RedMi 8A</div>
                      <div class="pro-price">599元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacd6a3d8440b7a038e9778702bd6db6.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                      </div>
                      <div class="pro-name">RedMi Note 8</div>
                      <div class="pro-price">899元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ee0af37bbd2f5a83c799e87dd791037.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                      </div>
                      <div class="pro-name">RedMi Note 8 Pro</div>
                      <div class="pro-price">1299元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a9734e0314fec470ff6912a8a92da5e6.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                      </div>
                      <div class="pro-name">RedMi 8</div>
                      <div class="pro-price">699元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>RedMi手机</span>
              <!-- <div class="children"></div> -->
            </div>
            <div class="item-menu">
              <span>电视</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                      </div>
                      <div class="pro-name">小米壁画电视 65寸</div>
                      <div class="pro-price">6999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                      </div>
                      <div class="pro-name">小米全面屏电视E55A</div>
                      <div class="pro-price">1999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-3.png" alt="">
                      </div>
                      <div class="pro-name">小米电视4A 32寸</div>
                      <div class="pro-price">699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                      </div>
                      <div class="pro-name">小米电视4A 55寸</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                      </div>
                      <div class="pro-name">小米电视4A 65寸</div>
                      <div class="pro-price">2699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="/imgs/nav-img/nav-3-6.jpg" alt="">
                      </div>
                      <div class="pro-name">查看全部</div>
                      <div class="pro-price">查看全部</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="header-search">
            <div class="wrapper">
              <input type="text" name="keyword">
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      username: 'Narcissus',
      phoneList: []
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then(res => {
        // console.log(res)
        // console.log(typeof res.list)
        if (res.list.length > 6) {
          this.phoneList = res.list.slice(0, 6)
          // console.log(this.phoneList)
        }
        // Math.max(res.list, 6)
      })
    },
    goToCart () {
      this.$router.push('/cart')
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
      .container{
        @include flex();
        a{
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        .my-cart{
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color: #ffffff;
          .icon-cart{
            @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &::before{
              content: '';
              display: inline-block;
              @include bgImg(55px,55px,'/imgs/mi-logo.png');
              transition: margin .2s;
            }
            &::after{
              content: '';
              display: inline-block;
              @include bgImg(55px,55px,'/imgs/mi-home.png');
            }
            &:hover::before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu{
          display: inline-block;
          padding-left: 209px;
          width: 643px;
          .item-menu{
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                // display: inline;
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              overflow: hidden;
              // display: none;
              opacity: 0;
              position:absolute;
              height: 220px;
              top: 112px;
              left: 0;
              width: 100%;
              height: 0;
              border-top: 1px solid #E5E5E5;
              box-shadow: 0 7px 6px 0 rgba(0,0,0,0.11);
              // background-color: #ffffff;
              z-index: 10;
              transition: height .5s;
              .product{
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                &::before{
                  content: '';
                  position:absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child::before{
                  display: none;
                }
                a{
                  display: inline-block;
                }
                .pro-img{
                  height: 137px;
                  img{
                    width: auto;
                    height: 111px;
                    margin-top: 26px;
                  }
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price{
                  color: $colorA;
                  font-weight: 600;
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input{
              box-sizing: border-box;
              border: none;
              border-right: 1px solid #E0E0E0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a{
              display: inline-block;
              @include bgImg(18px,18px,'/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>
