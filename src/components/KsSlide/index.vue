<template>
  <div class="slide-render-view mt-1">
    <div class="slide-wrapper">
      <div class="slide-content">
        <slide ref="slide" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
          <div v-for="item in items" :key="item.id">
            <a :href="item.linkUrl?item.linkUrl:'javascript:;'" target="_blank">
              <img :src="item.picUrl">
            </a>
          </div>
        </slide>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Slide from 'components/Slide'

export default {
  name: 'slide-render',
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      isAutoPlay: true,
      isLoop: true,
      isShowDot: true,
      speed: 400,
      threshold: 0.3,
      interval: 6000
    }
  },
  watch: {
    index() {
      this.$refs.slide.update()
    }
  },
  components: {
    Slide
  }
}
</script>

<style lang='less' scoped>
.slide-render-view{
  .slide-wrapper{
    position: relative;
    width: 100%;
    // 注意此高度依据照片来设置
    height: 9.06rem;
    overflow: hidden;
    .slide-content{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
