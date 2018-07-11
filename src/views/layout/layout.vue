<template>
  <div>
    <ks-header></ks-header>
    <ks-main></ks-main>
    <ks-footer></ks-footer>

    <div class="cross-screen flex flex-center flex-ver" v-show="orientationState">
      <div class="screen-icon"></div>
      <div class="tips">为了更好的体验，请将手机／平板竖过来</div>
    </div>
  </div>
</template>

<script>
import { KsHeader, KsFooter, KsMain } from './components'

export default {
  data () {
    return {
      orientationState: false
    }
  },
  components: {
    KsHeader,
    KsFooter,
    KsMain
  },
  mounted() {
    window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', this.orientation)
  },
  methods: {
    orientation() {
      if (window.orientation === 180 || window.orientation === 0) {
        this.orientationState = false
      }
      if (window.orientation === 90 || window.orientation === -90) {
        this.orientationState = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*定义为flexbox的"父元素"*/
.flex{
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
/*垂直居中*/
.flex-center{
  /*子元素沿主轴对齐方式居中*/
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  /*子元素沿交叉轴对齐方式居中*/
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;

}
/*指定主轴的伸缩流方向是纵向的*/
.flex-ver{
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
}
.cross-screen{
    z-index: 998;
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    left:0;
    background-color: #212429;
    color:#FF9300;
  .screen-icon{
    background: url(../../common/images/crossScreen.png) no-repeat center;
    background-size: 100% 100%;
    width: 2rem;
    height: 1.73rem;
  }
  .tips{
    margin-top: 0.2rem;
  }
}
</style>
