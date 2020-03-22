<template>
    <div class="index">
      <div class="container">
        <div class="swiper-box">
          <div class="nav-menu">
            <ul class="menu-wrap">
              <li class="menu-item">
                <a href="javascript">手机 电话卡</a>
                <div class="children">
                  <ul v-for="(item, index) in menuList" :key="index">
                    <li v-for="(subitem, index2) in item" :key="index2">
                      <a :href="subitem?'/#/product/'+subitem.id:''">
                        <img :src="subitem?subitem.img : '/imgs/item-box-1.png'" alt="">
                        {{subitem?subitem.name : '小米9'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu-item">
                <a href="javascript">电视 盒子</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript">笔记本 平板</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript">家电 插线板</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript">出行 穿戴</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript">智能 路由器</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript">电源 配件</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript">生活 箱包</a>
                <div class="children"></div>
              </li>
            </ul>
          </div>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in slideList" :key="index">
              <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="ads-box">
          <a :href="'/#/product/'+item.id" v-for="(item, index) in adsList" :key="index">
            <img :src="item.img" alt="">
          </a>
        </div>
        <div class="banner">
          <a href="/#/product/30">
            <img src="/imgs/banner-1.png" alt="">
          </a>
        </div>
      </div>
      <div class="product-box">
          <div class="container">
            <h2>手机</h2>
            <div class="wrapper">
              <div class="banner-left">
                <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg" alt=""></a>
              </div>
              <div class="list-box">
                <div class="list" v-for="(item, index1) in phoneList" :key="index1">
                  <div class="item" v-for="(arr, index2) in item" :key="index2">
                    <span :class="{'new-pro':index2%2==0}">新品</span>
                    <div class="item-img">
                      <img :src="arr.mainImage" alt="">
                    </div>
                    <div class="item-info">
                      <h3>{{arr.name}}</h3>
                      <p>{{arr.subtitle}}</p>
                      <p class="price" @click="addCart(arr.id)">{{arr.price | currency}}</p>
                    </div>
                  </div>
                </div>
                <!-- <div class="list"></div> -->
              </div>
            </div>
          </div>
        </div>
      <service-bar></service-bar>
      <modal title="提示" sureText="查看购物车" btnType="1" modalType="middle" @confirm="confirm" @cancel="showModal=false" :showModal="showModal">
        <template v-slot:body>
          <p>商品添加成功</p>
        </template>
      </modal>
    </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import Modal from './../components/Modal'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'index',
  components: { Modal, ServiceBar, swiper, swiperSlide },
  data () {
    return {
      showModal: false,
      swiperOption: {
        autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 1000,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        // autoplayDisableOnInteraction: false,
        // preventLinksPropagation: true,
        // 分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 导航按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      phoneList: [],
      slideList: [
        { id: '42', img: '/imgs/slider/slide-1.jpg' },
        { id: '45', img: '/imgs/slider/slide-2.jpg' },
        { id: '46', img: '/imgs/slider/slide-3.jpg' },
        { id: '', img: '/imgs/slider/slide-4.jpg' },
        { id: '', img: '/imgs/slider/slide-5.jpg' }
      ],
      menuList: [
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '移动4G专区' }
        ],
        [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        { id: 33, img: '/imgs/ads/ads-1.png' },
        { id: 48, img: '/imgs/ads/ads-2.jpg' },
        { id: 45, img: '/imgs/ads/ads-3.png' },
        { id: 47, img: '/imgs/ads/ads-4.jpg' }
      ]
    }
  },
  mounted () {
    this.init()
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  methods: {
    confirm () {
      this.$router.push('/cart')
    },
    addCart (id) {
      this.showModal = true
      // this.axios.post('/carts', {
      //   productId: id,
      //   selected: true
      // }).then((res) => {
      //   console.log(res)
      // }).catch(() => {
      //   this.showModal = true
      // })
    },
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        console.log(res)
        const newList = res.list.slice(6, 14)
        const listArr = newList.slice(0, 4)
        const newArr = newList.slice(4, 8)
        this.phoneList = [listArr, newArr]
        console.log(this.phoneList)
      })
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 451px;
        box-sizing: border-box;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585a7a;
        // opacity: ;
        .menu-wrap{
          .menu-item{
            // position: relative;
            height: 50px;
            line-height: 50px;
            a{
              display: block;
              position: relative;
              font-size:16px ;
              color: #ffffff;
              padding-left: 30px;
              &::after{
                content: ' ';
                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                position: absolute;
                right: 30px;
                top: 17.5px;
              }
            }
            &:hover{
              .children{
                // display: block;
                width: 962px;
                height: 451px;
              }
              background-color: $colorA;
            }
            .children{
              overflow: hidden;
              transition: width .2s;
              // display: none;
              width: 0px;
              height: 0px;
              background-color: $colorG;
              position: absolute;
              top: 0;
              left:264px ;
              border:1px solid $colorH ;
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  height: 75px;
                  line-height: 75px;
                  width: 40%;
                  padding-left: 23px;
                  a{
                    color: $colorB;
                    font-size: 14px;
                    img{
                      width: 42px;
                      height: 35px;
                      vertical-align: middle;
                      margin-right: 15px ;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container{
        .swiper-button-prev{
          left: 274px;
        }
        // width: 600px;
        height: 450px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box{
      margin-top: 14px;
      margin-bottom: 31px;
      @include flex();
      a{
        width: 296px;
        height: 167px;
      }
    }
    .banner{
      margin-bottom: 50px;
    }
    .product-box{
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2{
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right: 16px;
            width: 224px;
            height:619px;
            img{
              width: 100%;
              height: 100%;
            }
        }
        .list-box{
          .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0px;
            }
            .item{
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              span{
                display: inline-block;
                width: 67px;
                height: 24px;
                line-height: 24px;
                color: $colorG;
                &.kill-pro{
                  background-color: #E82626;
                }
                &.new-pro{
                  background-color: #7ECF68;
                }
              }
              .item-img{
                height: 195px;
                width: 100%;
                img{
                    width: auto;
                    height: 169px;
                    margin-top: 26px;
                  }
              }
              .item-info{
                h3{
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p{
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price{
                  color: #F20A0A;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &::after{
                    content: '';
                    margin-left: 5px;
                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
