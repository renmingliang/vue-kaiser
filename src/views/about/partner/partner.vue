<template>
  <div class="ks-partner">
    <ul>
      <li class="ks-partner-list text-center" v-for="(part, index) in partners" :key="index">
        <a :href="part.href" target="_blank">
          <div :class="`list-logo list-logo-${part.logo}`">
            <img :src="part.src">
          </div>
          <h2 class="list-name">{{part.name}}</h2>
        </a>
        <span class="under-line"></span>
        <div class="list-txt text-justify" v-html="part.info"></div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import config from '@/utils/config'

export default {
  data() {
    return {
      partners: config.about.partner.company
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-partner{
  background-color: @color-about-bg;
  &-list{
    .px2rem(padding-top, 90);
    .px2rem(padding-bottom, 90);
    .px2rem(padding-left, 44);
    .px2rem(padding-right, 44);
    &+&{
      .border-style(top, 8, @color-about-line);
    }
    .list-logo{
      display: inline-block;
      &-tsyj{
        .px2rem(width, 150);
      }
      &-knyx{
        .px2rem(width, 262);
      }
      &-hwkj{
        .px2rem(width, 205);
      }
    }
    .list-name{
      .px2rem(font-size, 40);
      .px2rem(margin-top, 70);
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
  }
}
</style>
