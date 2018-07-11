<template>
  <div class="video">
    <div class="mask"></div>
    <div id="videoContainer" class="video-container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$route.query.url
    }
  },
  created() {
  },
  mounted() {
    /* eslint-disable no-new */
    new TcPlayer('videoContainer', {
      'm3u8': this.url, // 请替换成实际可用的播放地址
      'autoplay': true, // iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
      'width': '100%', // 视频的显示宽度，请尽量使用视频分辨率宽度
      'height': '100%' // 视频的显示高度，请尽量使用视频分辨率高度
    })
  }
}
</script>

<style lang="less" scoped>
.mask{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 999;
}
.video-container{
  position: fixed;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 100%;
  border: 1px solid #000;
  z-index: 1000;
}
</style>
