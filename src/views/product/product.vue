<template>
  <div>
    <loading v-if="!lists.length && loadingShow"></loading>
    <ks-nav :navs="navs"></ks-nav>
    <div class="ks-product">
      <div class="ks-product-intro">
        <div class="intro-img">
          <img src="../../common/images/banner-product.png">
        </div>
        <div class="intro-desc mt-1">
          <div class="desc-name">
            <h2>{{products.name}}</h2>
            <span class="under-line"></span>
          </div>
          <div class="desc-txt text-justify">
            <p>{{products.summary}}</p>
          </div>
        </div>
      </div>
      <div class="ks-product-list mt-1">
        <ul>
          <li class="list-item" v-for="(item, index) in lists" :key="index">
            <div class="item-img">
              <img :src="item.image_url">
            </div>
            <h3 class="item-title">{{item.title}}</h3>
            <dl class="item-author">
              <dt class="author-img float-l">
                <img :src="item.author_img">
              </dt>
              <dd class="author-txt">
                <span>{{item.author_name}}</span>
                <p>{{item.author_job}}</p>
              </dd>
            </dl>
            <div class="item-desc text-justify" v-html="item.context"></div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="pullup-wrapper text-center" v-if="lists.length && pullUpLoad">
      <div class="before-trigger" v-if="!isPullUpLoad" v-html="beforeTxt"></div>
      <div class="after-trigger" v-else>
        <p>
          <img src="../../common/images/lazy.gif">
          <span>正在加载中</span>
        </p>
      </div>
    </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import { getProductList } from '@/api'
import config from '@/utils/config'
import KsNav from 'components/KsNav'
import Loading from 'components/Loading'

export default {
  data() {
    return {
      page: 1,
      cid: '',
      loadingShow: true,
      pullUpLoad: true,
      isEndPullUp: false,
      isPullUpLoad: false,
      threshold: config.news.pullUp.threshold,
      beforeTxt: config.news.pullUp.contentRefresh,
      winHeight: document.documentElement.clientHeight,
      navs: config.product.navs,
      products: {},
      lists: []
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.cid = to.query.cid || 'IP'
      // console.log(`Enter：${to.query.cid}, ${vm.cid}`)
      vm.getData()
      window.addEventListener('scroll', vm.handelScroll, false)
    })
  },
  beforeRouteUpdate(to, from, next) {
    if (this.cid !== to.query.cid) {
      this.cid = to.query.cid || 'IP'
      // console.log(`Update：${this.cid}`)
      this.refreshPullUp()
    }
    next()
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener('scroll', this.handelScroll, false)
    next()
  },
  methods: {
    handelScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const docHeight = document.body.clientHeight
      const temp = this.threshold + this.winHeight + scrollTop
      if (temp >= docHeight && !this.isPullUpLoad && !this.isEndPullUp) {
        this.page += 1
        this.getData()
      }
    },
    getData() {
      if (!this.isEndPullUp) {
        this.isPullUpLoad = true
        const params = {page: this.page, cid: this.cid}
        // console.log(params)
        getProductList(params)
          .then((res) => {
            this.isPullUpLoad = false
            // console.log(res.data)
            const temp = res.data
            if (temp.code === 10000) {
              this.products = temp
              this.lists.splice(this.lists.length, 0, ...temp.data)
              if (temp.pageCount === temp.pageIndex) {
                this.beforeTxt = config.news.pullUp.contentNoMore || `总计${this.lists.length}条数据已全部加载完毕`
                this.isEndPullUp = true
              }
            }
          })
          .catch((err) => {
            this.loadingShow = false
            console.log(err)
          })
      }
    },
    refreshPullUp() {
      this.page = 1
      this.isEndPullUp = false
      this.beforeTxt = config.news.pullUp.contentRefresh
      this.lists.splice(0, this.lists.length)
      this.getData()
    }
  },
  components: {
    KsNav,
    Loading
  }
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-product{
  &-intro{
    .intro-desc{
      .px2rem(padding-top, 60);
      .px2rem(padding-bottom, 66);
      .px2rem(padding-left, 31);
      .px2rem(padding-right, 39);
      background-color: @color-header-bg;
      .desc-name{
        h2{
          .px2rem(font-size, 36);
          .px2rem(margin-bottom, 10);
          color: @color-fff;
        }
        .under-line{
          .line-style(80, 6, @color-contact-line);
        }
      }
      .desc-txt{
        .px2rem(margin-top, 26);
        .px2rem(font-size, 26);
        .px2rem(line-height, 50);
      }
    }
  }
  &-list{
    .px2rem(padding-top, 20);
    .px2rem(padding-bottom, 100);
    background-color: @color-intro-bg;
    .list-item{
      .px2rem(margin-top, 50);
      .px2rem(padding-left, 28);
      .px2rem(padding-right, 31);
      .px2rem(padding-bottom, 32);
      &:not(:last-child){
        .border-style(bottom, 4, @color-intro-bd);
      }
      .item-title{
        .px2rem(font-size, 48);
        .px2rem(margin-top, 43);
        color: @color-fff;
        font-weight: bold;
      }
      .item-author{
        .px2rem(margin-top, 42);
        overflow: hidden;
        .author-img{
          .px2rem(width, 73);
          .px2rem(height, 79);
          .px2rem(margin-right, 13);
        }
        .author-txt{
          .px2rem(font-size, 30);
          span{
            color: @color-intro-author;
          }
          p{
            .px2rem(margin-top, 16);
            color: @color-888;
            overflow: hidden;
            line-height: 1.3;
          }
        }
      }
      .item-desc{
        .px2rem(margin-top, 40);
        .px2rem(font-size, 26);
        .px2rem(line-height, 34);
        color: @color-fff;
      }
    }
  }
}
</style>
