<template>
  <div>
    <loading v-if="!news.length && loadingShow" :styleBG="loadingBG"></loading>
    <ks-nav :navs="navs"></ks-nav>
    <div class="ks-news mt-1">
      <div class="ks-news-list" v-for="(list, index) in news" :key="index">
        <p class="list-date text-center">
          <span>{{list.release_time | parseDate}}</span>
        </p>
        <div class="list-item">
          <ul class="item-media">
            <li>
              <router-link :to="{name: 'detail', params: {id: list.id}}">
                <div v-if="list.image_url" class="item-pic">
                  <img :src="list.image_url">
                </div>
                <div class="media-body">
                  <!-- <div v-if="list.image_url" class="media-img float-r text-center">
                    <img :src="list.image_url">
                  </div> -->
                  <h3>{{list.title}}</h3>
                  <p>{{list.summary}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="pullup-wrapper text-center" v-if="news.length && pullUpLoad">
      <div class="before-trigger" v-if="!isPullUpLoad" v-html="beforeTxt"></div>
      <div class="after-trigger" v-else>
        <p>
          <img src="../../../common/images/lazy.gif">
          <span>正在加载中</span>
        </p>
      </div>
    </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import { getNewsList } from '@/api'
import config from '@/utils/config'
import KsNav from 'components/KsNav'
import Loading from 'components/Loading'

export default {
  data() {
    return {
      page: 1,
      time: '',
      loadingShow: true,
      pullUpLoad: true,
      isEndPullUp: false,
      isPullUpLoad: false,
      loadingBG: config.news.loadingBG,
      threshold: config.news.pullUp.threshold,
      beforeTxt: config.news.pullUp.contentRefresh,
      winHeight: document.documentElement.clientHeight,
      navs: config.news.navs,
      news: []
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.time = to.query.time || new Date().getFullYear().toString()
      // console.log(`Enter：${to.query.time}, ${vm.time}`)
      vm.getData()
      window.addEventListener('scroll', vm.handelScroll, false)
    })
  },
  beforeRouteUpdate(to, from, next) {
    if (this.time !== to.query.time) {
      this.time = to.query.time || new Date().getFullYear().toString()
      // console.log(`Update：${this.time}`)
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
        const params = {page: this.page, time: this.time}
        // console.log(params)
        getNewsList(params)
          .then((res) => {
            this.isPullUpLoad = false
            const temp = res.data
            if (temp && temp.code === 10000) {
              this.news.splice(this.news.length, 0, ...temp.data)
              if (temp.pageCount === temp.pageIndex) {
                this.beforeTxt = config.news.pullUp.contentNoMore || `总计${this.news.length}条数据已全部加载完毕`
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
      this.loadingShow = true
      this.isEndPullUp = false
      this.beforeTxt = config.news.pullUp.contentRefresh
      this.news.splice(0, this.news.length)
      this.getData()
    }
  },
  filters: {
    parseDate (val) {
      return val.substr(5, 5).replace('-', '月') + '日'
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

.ks-news{
  .px2rem(padding-top, 10);
  .px2rem(padding-bottom, 70);
  .px2rem(padding-left, 27);
  .px2rem(padding-right, 27);
  background-color: @color-news-bg;
  &-list{
   .list-date{
     .px2rem(margin-top, 40);
     span{
       .px2rem(font-size, 32);
       .px2rem(padding-top, 11);
       .px2rem(padding-bottom, 11);
       .px2rem(padding-left, 18);
       .px2rem(padding-right, 18);
       color: @color-fff;
       display: inline-block;
       background: url(../../../common/images/bg-news.png) no-repeat 0 0;
       background-size: 100% 100%;
     }
   }
   .list-item{
      .px2rem(margin-top, 40);
      .item-pic{
        img{
          width: 100%;
        }
      }
     .item-media{
        background-color: @color-fff;
        li{
          &+li{
            .border-1px(top, @color-888);
          }
          .media-body{
            .px2rem(padding-top, 30);
            .px2rem(padding-bottom, 30);
            .px2rem(margin-left, 36);
            .px2rem(margin-right, 36);
            h3{
              .no-wrap();
              .px2rem(font-size, 33);
              .px2rem(margin-top, 6);
              color: @color-000;
            }
            p{
              .wrap-line(2);
              .px2rem(margin-top, 24);
              .px2rem(font-size, 25);
              .px2rem(line-height, 40);
              color: @color-888;
            }
          }
          .media-img{
            .px2rem(margin-left,40);
            .px2rem(width, 148);
            .px2rem(height, 135);
            .px2rem(line-height, 135);
            img{
              .px2rem(max-width, 148);
              .px2rem(max-height, 135);
            }
          }
          &,a,.media-body{
            overflow: hidden;
            display: block;
          }
        }
      }
    }
  }
}
</style>
