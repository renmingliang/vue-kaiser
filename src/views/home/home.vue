<template>
  <div>
    <div class="ks-swiper">
      <ks-swiper v-if="slides" :swiperSlides="slides"></ks-swiper>
    </div>
    <section class="ks-layout">
      <div class="ks-layout-desc desc-bg-1">
        <h2 class="desc-title">泛娱乐产业布局</h2>
        <div class="desc-text">
          <p>凯撒文化全面布局以精品IP、游戏、动漫、影视的泛娱乐产业；开展IP运营、游戏研发与发行、动漫出品与投资，影视剧出品与投资、互联网文化产业投资等多维度业务。</p>
        </div>
      </div>
      <div class="ks-layout-product">
        <ul>
          <li v-for="(kvImg, index) in kvImgs" :key="index">
            <router-link :to="`/product?cid=${kvImg.cid}`">
              <img :src="kvImg.wap_image_url">
              <div class="product-desc">
                <h3>{{ kvImg.name }}</h3>
                <p>{{ kvImg.e_name }}</p>
                <span class="more">查看更多</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="ks-layout">
      <div class="ks-layout-desc desc-bg-2">
        <h2 class="desc-title">发展历程</h2>
        <div class="desc-text">
          <p>凯撒文化成立于1994年；2010年在深圳证券交易所上市；2014年公司全面布局泛娱乐，全新定位为：以精品IP为核心的泛娱乐一体化运营商。</p>
        </div>
      </div>
      <div class="ks-layout-dev">
        <div class="dev-line"></div>
        <div class="dev-time">
          <div class="dev-time-box" v-for="(devEvent, key) in devEvents" :key="key">
            <div class="dev-time-item">
              <div class="dev-item-year">
                <h4>{{key}}年</h4>
                <span class="under-line"></span>
              </div>
              <div class="dev-item-event">
                <ul>
                  <li v-for="(event, index) in devEvent" :key="index">
                    <span class="event-dot"></span>
                    <div class="event-text" :class="{'color-event': event.color === '2'}">{{ event.description }}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getBanner, getPast, getKvImg } from '@/api'
import KsSlide from 'components/KsSlide'
import KsSwiper from 'components/KsSwiper'

export default {
  name: 'index',
  data () {
    return {
      slides: null,
      kvImgs: null,
      devEvents: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getBanner().then(res => {
        // console.log(res.data)
        if (res.data.code === 10000) {
          this.slides = res.data.data
        }
      })
      getKvImg().then(res => {
        // console.log(res.data)
        if (res.data.code === 10000) {
          this.kvImgs = res.data.data
        }
      })
      getPast().then(res => {
        // console.log(res.data)
        if (res.data.code === 10000) {
          this.devEvents = res.data.data
        }
      })
    }
  },
  components: {
    KsSlide,
    KsSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-layout{
  &-desc{
    width: 100%;
    text-align: center;
    .px2rem(height, 234);
    .px2rem(margin-top, 14);
    .px2rem(margin-bottom, 14);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0;
    &.desc-bg-1{
      background-image: url(../../common/images/layout.png);
    }
    &.desc-bg-2{
      background-image: url(../../common/images/dev.png);
    }
    .desc-title{
      .px2rem(padding-top, 37);
      .px2rem(padding-bottom, 38);
      .px2rem(font-size, 50);
      .font-yahei;
      color: @color-title;
      font-weight: bolder;
    }
    .desc-text{
      .px2rem(padding-left, 34);
      .px2rem(padding-right, 34);
      .px2rem(font-size, 22);
      .px2rem(line-height, 30);
      color: @color-text-l;
    }
  }
  &-product{
    .px2rem(padding-top, 69);
    .px2rem(padding-bottom, 64);
    background: url(../../common/images/bg-layout.png) no-repeat 0 0;
    background-size: 100% 100%;
    ul{
      .px2rem(margin-left, 40);
      .px2rem(margin-right, 40);
      li{
        .px2rem(margin-bottom, 36);
        .product-desc{
          .px2rem(padding-top, 14);
          .px2rem(padding-bottom, 18);
          .px2rem(padding-left, 40);
          position: relative;
          background: url(../../common/images/bg-part.png) no-repeat 0 0;
          background-size: 100% 100%;
          h3{
            .px2rem(font-size, 36);
          }
          p{
            .px2rem(margin-top, 6);
            .px2rem(font-size, 20);
            text-transform: uppercase;
          }
          .more{
            display: block;
            position: absolute;
            .px2rem(right, 24);
            .px2rem(font-size, 26);
            .px2rem(padding-right, 40);
            top: 50%;
            transform: translate(0, -50%);
            background: url(../../common/images/more.png) no-repeat;
            background-position: right center;
            background-size: contain;
          }
        }
      }
    }
  }
  &-dev{
    .px2rem(padding-top, 56);
    .px2rem(padding-bottom, 60);
    .px2rem(padding-left, 20);
    .px2rem(padding-right, 20);
    background: url(../../common/images/bg-dev.png) no-repeat 0 0;
    background-size: 100% 100%;
    position: relative;
    .dev-line{
      .poa-center();
      width: 1px;
      height: 100%;
      background-color: @color-fff;
    }
    .dev-time{
      .dev-time-box{
        overflow: hidden;
        &:nth-child(odd){
          .dev-time-item{
            float: left;
            text-align: right;
            .event-dot{
              .px2rem(margin-right, -21);
              right: 0;
            }
          }
        }
        &:nth-child(even){
          .dev-time-item{
            float: right;
            text-align: left;
            .event-dot{
              .px2rem(margin-left, -21);
              left: 0;
            }
          }
        }
      }
      .dev-time-item{
        width: 48%;
        .dev-item-year{
          position: relative;
          .px2rem(margin-top, 14);
          .px2rem(margin-bottom, 14);
          h4{
            .px2rem(font-size, 33);
            color: @color-fff;
          }
          .under-line{
            .line-style(52, 4, @color-fff);
          }
        }
        .dev-item-event{
          li{
            .px2rem(margin-bottom, 30);
            color: @color-fff;
            position: relative;
            .event-dot{
              .px2rem(width, 13);
              .px2rem(height, 13);
              .px2rem(top, 4);
              background-color: @color-fff;
              border-radius: 50%;
              position: absolute;
            }
            .event-text{
              .px2rem(font-size, 23);
              .px2rem(line-height, 30);
            }
          }
        }
      }
    }
  }
}
</style>
