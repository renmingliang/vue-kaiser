<template>
  <div class="ks-detail">
    <img :src="statement.image_url">
    <div class="ks-detail-wrap">
      <!-- <h2 class="detail-title">{{info.title}}</h2> -->
      <div v-html="statement.context" class="detail-desc text-justify"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getStatement } from '@/api'

export default {
  data() {
    return {
      info: {
        title: '法律声明'
      },
      statement: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getStatement()
        .then((res) => {
          const temp = res.data
          if (temp && temp.code === 10000) {
            this.statement = temp.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
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
    display: block;
  }
  &-wrap{
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
