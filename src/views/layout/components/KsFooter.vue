<template>
  <footer class="ks-footer mt-1">
    <div class="ks-footer-icon">
      <ul>
        <li>
          <a href="http://weibo.com/kaisercomcn" target="_blank">
            <i class="icon-weibo"></i>
          </a>
        </li>
        <li>
          <div class="copy-email" :data-clipboard-text="email">
            <i class="icon-email"></i>
          </div>
        </li>
        <li>
          <div @click="showQR">
            <i class="icon-weixin"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="ks-footer-wrap">
      <div class="footer-logo"></div>
      <div class="footer-txt">
        <h5>
          <router-link to="/statement">法律声明</router-link>
        </h5>
        <p>Copyright © Kaiser(China) Culture<br>Co., Ltd. All Rights Reserved.</p>
      </div>
      <div class="footer-icp">
        <p>粤ICP备11071162号-2</p>
      </div>
    </div>
    <div v-show="showStatus" class="qrcode" @touchmove.prevent>
      <div @click="closeQR" class="qrcode-mask"></div>
      <div class="qrcode-content">
        <!-- <div class="qrcode-close"><img src="../../../common/images/icon-8.png" alt="关闭"></div> -->
        <p><img src="http://www.kaiser.com.cn/pc/dist/img/ewm.jpg"></p>
      </div>
    </div>
    <loading v-if="copyStatus" :title="toast.title" :toastImg="toast.img"></loading>
  </footer>
</template>

<script>
import ClipBoard from 'clipboard'
import Loading from 'components/Loading'

export default {
  data () {
    return {
      email: 'SZHR@kaiser.com.cn',
      copyStatus: false,
      showStatus: false,
      toast: {
        title: '已成功复制到剪切板',
        img: false
      }
    }
  },
  created() {
    this.initCopy()
  },
  methods: {
    initCopy() {
      const self = this // 指明this对象
      const clipboard = new ClipBoard('.copy-email')
      clipboard.on('success', function(e) {
        // console.info('Action:', e.action)
        // console.info('Text:', e.text)
        // console.info('Trigger:', e.trigger)
        self.copyStatus = true
        e.clearSelection()
        setTimeout(() => {
          self.copyStatus = false
        }, 1000)
      })

      clipboard.on('error', function(e) {
        // console.error('Action:', e.action)
        // console.error('Trigger:', e.trigger)
        self.toast.title = '点击复制失败，请手动复制'
        self.copyStatus = true
        setTimeout(() => {
          self.copyStatus = false
        }, 1000)
      })
    },
    showQR() {
      this.showStatus = true
    },
    closeQR() {
      this.showStatus = false
    }
  },
  components: {
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-footer{
  text-align: center;
  background-color: @color-footer-bg;
  &-icon{
    .px2rem(height, 88);
    .px2rem(line-height, 88);
    background-color: @color-footer-icon;
    ul{
      width: 100%;
      height: 100%;
      display: table;
      li{
        display: table-cell;
        [class*=icon-]{
          .px2rem(width, 59);
          .px2rem(height, 59);
        }
        a{
          display: block;
        }
        .icon-weibo{
          background-image: url(../../../common/images/icon-weibo.png);
        }
        .icon-email{
          background-image: url(../../../common/images/icon-email.png);
        }
        .icon-weixin{
          background-image: url(../../../common/images/icon-weixin.png);
        }
      }
    }
  }
  &-wrap{
    .px2rem(padding-top, 17);
    .px2rem(padding-bottom, 24);
    .footer-logo{
      .px2rem(width, 229);
      .px2rem(height, 97);
      display: inline-block;
      background: url(../../../common/images/logo-footer.png) no-repeat 0 0;
      background-size: 100% 100%;
    }
    .footer-txt{
      h5{
        .px2rem(margin-top, 30);
        .px2rem(font-size, 22);
        a{
          color: @color-footer-law;
        }
      }
      p{
        .px2rem(margin-top, 28);
        .px2rem(font-size, 24);
        line-height: 1.2;
        color: @color-footer-txt;
      }
    }
    .footer-icp{
      .px2rem(padding-top, 29);
      .px2rem(margin-top, 21);
      .px2rem(border-top-width, 2);
      border-style: solid;
      border-color: @color-footer-line;
      p{
        .px2rem(font-size, 29);
        color: @color-footer-icp;
      }
    }
  }
}

.qrcode{
  &-mask{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
  }
  &-content{
    .px2rem(width, 400);
    .px2rem(bottom, 508);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1001;
    .qrcode-close{
      .px2rem(top, -116);
      .px2rem(width, 60);
      .px2rem(height, 60);
      .px2rem(line-height, 60);
      .border-style(top, 2, @color-ddd);
      .border-style(bottom, 2, @color-ddd);
      .border-style(left, 2, @color-ddd);
      .border-style(right, 2, @color-ddd);
      position: absolute;
      right: 0;
      z-index: 2;
      border-radius: 50%;
      img{
        .px2rem(width, 40);
        border-radius: 50%;
      }
      &:after{
        content: '';
        .px2rem(width, 4);
        .px2rem(height, 54);
        .px2rem(right, 28);
        .px2rem(bottom, -54);
        background-color: @color-ddd;
        position: absolute;
      }
    }
  }
}
</style>
