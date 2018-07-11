<template>
  <div class="ks-team">
    <ul class="ks-team-wrap">
      <li class="wrap-list text-center" v-for="(team, index) in teams" :key="index">
        <div class="list-logo">
          <img :src="team.image_url">
        </div>
        <div class="list-desc">
          <p class="desc-job">{{team.job}}</p>
          <h2 class="desc-name">{{team.name}}</h2>
          <span class="under-line"></span>
          <div class="desc-txt text-justify" v-html="team.context"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { getTeamInfo } from '@/api'

export default {
  data() {
    return {
      teams: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getTeamInfo().then(res => {
        // console.log(res)
        if (res.data.code === 10000) {
          this.teams = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-team{
  .px2rem(padding-left, 30);
  .px2rem(padding-right, 30);
  background-color: @color-about-bg;
  &-wrap{
    .px2rem(padding-top, 60);
    .px2rem(padding-bottom, 5);
    .wrap-list{
      .px2rem(margin-bottom, 60);
      color: @color-fff;
      background-color: @color-about-team;
      .list-logo{
        img{
          width: 100%;
        }
      }
      .desc-job{
        .px2rem(font-size, 40);
        .px2rem(margin-top, 17);
      }
      .desc-name{
        .px2rem(font-size, 30);
        .px2rem(margin-top, 14);
        color: @color-service-txt;
      }
      .under-line{
        .px2rem(margin-top, 25);
        .line-style(42, 5, @color-contact-line);
      }
      .desc-txt{
        .px2rem(font-size, 24);
        .px2rem(line-height, 38);
        .px2rem(margin-top, 16);
        .px2rem(padding-bottom, 60);
        .px2rem(padding-left, 34);
        .px2rem(padding-right, 34);
      }
    }
  }
}
</style>
