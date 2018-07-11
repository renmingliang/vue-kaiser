<template>
  <div class="ks-intro">
    <div class="ks-intro-list">
      <h2 class="list-name list-name-big">凯撒（中国）文化股份有限公司</h2>
      <span class="under-line"></span>
      <div class="list-txt intro-company text-justify">
        <p>凯撒文化，以精品IP为核心，从事手游研发与发行、动漫出品与投资、影视剧出品与投资、互联网文化产业投资等，是中国知名的泛娱乐公司。</p>
        <p>公司成立于1994年，创始人郑合明。2010年中国A股上市（股票代码002425）。1994年成立至今，拥有23年发展历史，历史悠久。与众多国际顶级伙伴紧密合作，信誉卓著，声名远播。秉持国际化发展战略，进行全球化的泛娱乐产业运营 ，业务覆盖中国香港、中国大陆、台湾地区、日本、新加坡、马来西亚、泰国等亚太地区。</p>
      </div>
    </div>
    <div class="intro-img">
      <img src="../../../common/images/intro-part-1.png">
    </div>
    <ul>
      <li class="ks-intro-list" v-for="(intro, index) in intros" :key="index">
        <h2 class="list-name list-name-middle">{{intro.name}}</h2>
        <span class="under-line"></span>
        <div class="list-txt text-justify" v-html="intro.info"></div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
      compay: {name: '凯撒（中国）文化股份有限公司', info: '<p>凯撒文化，以精品IP为核心，从事手游研发与发行、动漫出品与投资、影视剧出品与投资、互联网文化产业投资等，是中国知名的泛娱乐公司。</p><p>公司成立于1994年，创始人郑合明。2010年中国A股上市（股票代码002425）。1994年成立至今，拥有23年发展历史，历史悠久。与众多国际顶级伙伴紧密合作，信誉卓著，声名远播。秉持国际化发展战略，进行全球化的泛娱乐产业运营 ，业务覆盖中国香港、中国大陆、台湾地区、日本、新加坡、马来西亚、泰国等亚太地区。</p>'},
      intros: [
        {id: 0, name: 'IP运营', info: '<p>公司已搭建了网络文学IP、动漫IP、传统文学IP专业团队，可进行影视、动漫、游戏等全品类多方位的IP培育运营， <span style="color: #dcdcdc;">优秀的IP运营能力是公司发展泛娱乐最核心的竞争力。</span></p>'},
        {id: 1, name: '手游研发与发行', info: '<p><span class="" style="color: #dcdcdc;">公司拥有顶尖研发实力的游戏自研团队，并持续投资优秀游戏研发团队，同时具备强大的游戏发行能力。</span>全资子公司天上友嘉研发了《圣斗士星矢：重生》、《三国志2017》、《新仙剑奇侠传》等经典IP改编手游，全资子公司酷牛互动研发了《唐门世界》、《绝世天府》等知名网文IP改编手游。</p>'},
        {id: 2, name: '影视剧出品与投资', info: '<p><span class="" style="color: #dcdcdc;">凯撒文化将陆续参投国内外一线电影制作公司，深度参与电影电视剧和网剧等投资制作。</span>凯撒文化已与华策影视开展深度合作，获得温瑞安的武侠小说《说英雄谁是英雄》的动漫、影视、手游改编权。 同时还有20多部影视剧项目在授权运作中。</p>'},
        {id: 3, name: '动漫出品与投资', info: '<p><span class="" style="color: #dcdcdc;">凯撒文化组建了专业的动漫团队，负责将现有的ＩＰ进行动漫化的改编。</span>2016年，凯撒文化投资并携手上海美术电影制片厂，出品经典ＩＰ动漫《新葫芦兄弟》；2017年与国内一视频平台优酷土豆、国内优秀的动画制作公司柏言映画共同投资、联合出品原创3D武侠动画《少年锦衣卫》；联合出品知名网络小说《玄界之门》改编的同名漫画。</p>'}
      ]
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-intro{
  background-color: @color-about-bg;
  &>&-list{
    .under-line{
      .px2rem(width, 85);
    }
  }
  &-list{
    .px2rem(padding-top, 80);
    .px2rem(padding-bottom, 90);
    .px2rem(padding-left, 44);
    .px2rem(padding-right, 44);
    &+&{
      .border-style(top, 8, @color-about-line);
    }
    .list-name{
      .px2rem(margin-top, 20);
      color: @color-fff;
      &-big{
        .px2rem(font-size, 44);
      }
      &-middle{
        .px2rem(font-size, 36);
      }
    }
    .under-line{
      .line-style(50, 5, @color-contact-line);
      .px2rem(margin-top, 25);
    }
    .list-txt{
      .px2rem(margin-top, 18);
      .px2rem(font-size, 30);
      .px2rem(line-height, 60);
      color: @color-service-txt;
    }
    .intro-company{
      p+p{
        .px2rem(margin-top, 40);
      }
    }
  }
}
</style>
