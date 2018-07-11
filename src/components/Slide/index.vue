<template>
  <div class="slide" ref="slide">
    <div class="slide-group" ref="slideGroup">
      <slot>
      </slot>
    </div>
    <div v-if="showDot" class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots" :key="index"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { addClass } from '../../common/js/dom'
import BScroll from 'better-scroll'

export default {
  name: 'slide',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    showDot: {
      type: Boolean,
      default: true
    },
    click: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 0.3
    },
    speed: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted() {
    this.update()

    window.addEventListener('resize', () => {
      if (!this.slide || !this.slide.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.slide.isInTransition) {
          this._onScrollEnd()
        } else {
          if (this.autoPlay) {
            this._play()
          }
        }
        this.refresh()
      }, 60)
    })
  },
  activated() {
    if (!this.slide) {
      return
    }
    this.slide.enable()
    let pageIndex = this.slide.getCurrentPage().pageX
    this.slide.goToPage(pageIndex, 0, 0)
    this.currentPageIndex = pageIndex
    if (this.autoPlay) {
      this._play()
    }
  },
  deactivated() {
    this.slide.disable()
    clearTimeout(this.timer)
  },
  beforeDestroy() {
    this.slide.disable()
    clearTimeout(this.timer)
  },
  methods: {
    update() {
      if (this.slide) {
        this.slide.destroy()
      }
      this.$nextTick(() => {
        this.init()
      })
    },
    refresh() {
      this._setSlideWidth(true)
      this.slide.refresh()
    },
    prev() {
      this.slide.prev()
    },
    next() {
      this.slide.next()
    },
    init() {
      clearTimeout(this.timer)
      this.currentPageIndex = 0
      this._setSlideWidth()
      if (this.showDot) {
        this._initDots()
      }
      this._initSlide()

      if (this.autoPlay) {
        this._play()
      }
    },
    _setSlideWidth(isResize) {
      this.children = this.$refs.slideGroup.children

      let width = 0
      let slideWidth = this.$refs.slide.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slide-item')

        child.style.width = slideWidth + 'px'
        width += slideWidth
      }
      if (this.loop && !isResize) {
        width += 2 * slideWidth
      }
      this.$refs.slideGroup.style.width = width + 'px'
    },
    _initSlide() {
      // console.log(`threshold：${this.threshold}`)
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed
        },
        bounce: false,
        click: this.click
      })

      this.slide.on('scrollEnd', this._onScrollEnd)

      this.slide.on('touchEnd', () => {
        if (this.autoPlay) {
          this._play()
        }
      })

      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    },
    _onScrollEnd() {
      let pageIndex = this.slide.getCurrentPage().pageX
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    },
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    _play() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slide.next()
      }, this.interval)
    }
  },
  watch: {
    loop() {
      this.update()
    },
    autoPlay() {
      this.update()
    },
    speed() {
      this.update()
    },
    threshold() {
      this.update()
    }
  }
}
</script>

<style lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";
.slide{
  min-height: 100%;
  .slide-group{
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slide-item{
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      a{
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }
    }
  }
  .dots{
    position: absolute;
    right: 0;
    left: 0;
    .px2rem(bottom, 28);
    text-align: center;
    font-size: 0;
    .dot{
      .px2rem(width, 14);
      .px2rem(height, 14);
      .px2rem(margin-right, 14);
      display: inline-block;
      border-radius: 50%;
      background-color: @color-fff;
      &.active{
        .px2rem(width, 33);
        .px2rem(border-radius, 20);
      }
    }
  }
}
</style>
