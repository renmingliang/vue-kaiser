<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
      <a v-if="item.type==='2'" :href="item.linkUrl?item.linkUrl:'javascript:;'" target="_blank">
        <img :src="item.picUrl">
      </a>
      <span v-else @click="typeLink(item)">
        <img :src="item.picUrl">
      </span>
    </swiper-slide>
    <!-- Optional controls -->
    <div id="dots" class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
  </swiper>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'ks-swiper',
  props: {
    swiperSlides: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        }
      }
    }
  },
  methods: {
    typeLink(item) {
      // 视频
      if (item.type === '3') {
        this.$router.push({name: 'video', query: { url: item.video_url }})
      } else {
      // 详情页
        this.$router.push({name: 'scroll-detail', query: { id: item.id }})
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

#dots{
  position: absolute;
  right: 0;
  left: 0;
  .px2rem(bottom, 28);
  text-align: center;
  font-size: 0;
  .swiper-pagination-bullet-custom {
    .px2rem(width, 14);
    .px2rem(height, 14);
    .px2rem(margin-right, 14);
    display: inline-block;
    border-radius: 50%;
    opacity: 1;
    background-color: @color-fff;
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    .px2rem(width, 33);
    .px2rem(border-radius, 20);
  }
}
</style>
