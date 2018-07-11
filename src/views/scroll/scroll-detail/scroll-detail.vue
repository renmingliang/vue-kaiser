<template>
  <div v-if="article" class="ks-detail mt-1">
    <img :src="article.image_url">
    <div class="ks-detail-wrap">
      <h2 class="detail-title">{{article.title}}</h2>
      <p class="detail-date">{{article.release_time | parseDate}}</p>
      <div class="detail-desc text-justify" v-html="article.context"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getScrollDetail } from '@/api'

export default {
  data() {
    return {
      id: this.$route.query.id,
      article: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getScrollDetail({id: to.query.id}).then((res) => {
      next(vm => vm.setData(res))
    })
  },
  beforeRouteUpdate (to, from, next) {
    getScrollDetail({id: to.query.id}).then((res) => {
      this.setData(res)
      next()
    })
  },
  methods: {
    setData(res) {
      // console.log(res)
      if (res.data.code === 10000) {
        this.article = res.data.data
      }
    }
  },
  filters: {
    parseDate(val) {
      if (!val) return ''
      return val.substr(5, 5).replace(/-|$/g, ' / ') + val.substr(0, 4)
    }
  }
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-detail{
  background-color: @color-news-bg;
  img{
    width: 100%;
    height: 100%;
  }
  &-wrap{
    .px2rem(padding-top, 60);
    .px2rem(padding-bottom, 70);
    .px2rem(padding-left, 60);
    .px2rem(padding-right, 60);
    .detail-title{
      .px2rem(font-size, 45);
      .px2rem(line-height, 60);
      color: @color-fff;
    }
    .detail-date{
      .px2rem(font-size, 26);
      .px2rem(margin-top, 20);
      color: @color-news-date;
    }
    .detail-desc{
      .px2rem(margin-top, 90);
      .px2rem(font-size, 30);
      .px2rem(line-height, 54);
      color: @color-news-txt;
      p+p{
        .px2rem(margin-top, 50);
      }
    }
  }
}
</style>
