<template>
    <div class="header" :class="{'is_fixed':isFixed}">
      <div class="nav-header">
        <div class="container">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <div class="header-menu">
            <div class="item-menu">
              <span>公司介绍</span>
            </div>
            <div class="item-menu">
              <span>面料成分</span>
            </div>
            <div class="item-menu">
              <span>面临类型</span>
              <!-- <div class="children"></div> -->
            </div>
            <div class="item-menu">
              <span>生产</span>
              <div class="children">
                <ul>
                  <!-- <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                      </div>
                      <div class="pro-name">小米壁画电视 65寸</div>
                      <div class="pro-price">6999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                      </div>
                      <div class="pro-name">小米全面屏电视E55A</div>
                      <div class="pro-price">1999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                      </div>
                      <div class="pro-name">小米电视4A 32寸</div>
                      <div class="pro-price">699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                      </div>
                      <div class="pro-name">小米电视4A 55寸</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                      </div>
                      <div class="pro-name">小米电视4A 65寸</div>
                      <div class="pro-price">2699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-6.jpg'" alt="">
                      </div>
                      <div class="pro-name">查看全部</div>
                      <div class="pro-price">查看全部</div>
                    </a>
                  </li> -->
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>常见问题</span>
            </div>
            <div class="item-menu">
              <span>联系</span>
            </div>
          </div>
          <!-- <div class="header-search">
            <div class="wrapper">
              <input type="text" name="keyword">
              <a href="javascript:;"></a>
            </div>
          </div> -->
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      phoneList: [],
      isFixed: false
    }
  },
  computed: {
    // username () {
    //   return this.$store.state.username
    // },
    // cartCount () {
    //   return this.$store.state.cartCount
    // }
    ...mapState(['username', 'cartCount'])
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
    if (this.$route.params && this.$route.params.from === 'login') {
      this.getCartCount()
    }
    window.addEventListener('scroll', this.initHeight)
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight, false)
  },
  methods: {
    initHeight () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // eslint-disable-next-line no-unneeded-ternary
      this.isFixed = scrollTop > 50 ? true : false
      console.log(scrollTop)
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then(res => {
        // console.log(res)
        // console.log(typeof res.list)
        // if (res.list.length > 6) {
        // this.phoneList = res.list.slice(0, 6)
        this.phoneList = res.list
        // console.log(this.phoneList)
        // }
        // Math.max(res.list, 6)
      })
    },
    goToCart () {
      this.$router.push('/cart')
    },
    login () {
      this.$router.push('/login')
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    },
    logout () {
      this.axios.post('/user/logout').then(() => {
        alert('退出成功')
        this.$cookie.set('userId', '', { expires: '-1' })
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', '0')
      })
    }
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
  @keyframes scale{
      100%{
          opacity: 0;
          transform: scale(2.5);
      }
  }
  .header{
    z-index: 999;
    position: absolute;
    width: 100%;
    &.is_fixed{
        width: 100%;
        position: fixed;
        top: 0;
        .nav-header{
          height: 80px !important;
          // animation: height 1s ease-in-out  infinite;
        }
        .container{
          height: 80px !important;
        }
        .header-logo{
          // a::before{
          //   height: 70px;
          //   width: 70px;
          // }
          transform: scale(0.6);
        }
        .item-menu{
          line-height: 66px !important;
        }
        // box-shadow: 0 5px 5px $colorE;
    }
    .nav-topbar{
      position: relative;
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
      .container{
        background-color: #333333;
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
          margin-right:0px ;
          .icon-cart{
            @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
        background-color: rgba(22, 22, 22, 0.9);
        position: relative;
        width: 100%;
      .container{
        position: static;
        height: 112px;
        @include flex();
        .header-menu{
          display: inline-block;
          padding-left: 209px;
          width: 924px;
          display: flex;
          justify-content: space-between;
          .item-menu{
            display: inline-block;
            color: #fff;
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
              // width: 1226px;
              margin-left: auto;
              margin-right: auto;
              overflow: hidden;
              // display: none;
              opacity: 0;
              position:absolute;
              // height: 220px;
              top: 112px;
              left: 0;
              width: 100%;
              height: 0;
              border-top: 1px solid #1b1b1b;
              box-shadow: 0 7px 6px 0 rgba(0,0,0,0.11);
              background-color:rgba(22, 22, 22, 0.9);
              // opacity: 0.8;
              z-index: 10;
              transition: height .5s;
              ul{
                width: 1226px;
                margin-left: auto;
                margin-right: auto;
              }
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
