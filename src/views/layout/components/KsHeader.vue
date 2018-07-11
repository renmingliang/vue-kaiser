<template>
  <header class="ks-header clearfix fixed">
    <div class="ks-header-logo float-l">
      <router-link v-if="!renderTitle" to="/"></router-link>
      <span v-else>{{renderTitle}}</span>
    </div>
    <div class="ks-header-icon float-r">
      <span @click="openMenu">
        <i class="icon-more"></i>
      </span>
    </div>
    <ks-menu :opened="opened" v-on:close="closeMenu"></ks-menu>
  </header>
</template>

<script>
import KsMenu from './KsMenu'

export default {
  data () {
    return {
      opened: false
    }
  },
  computed: {
    // 渲染页面标题
    renderTitle() {
      return this.$route.meta.title
    }
  },
  methods: {
    openMenu() {
      this.opened = true
    },
    closeMenu() {
      this.opened = false
    }
  },
  components: {
    KsMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-header{
  background-color: @color-header-bg;
  color: @color-fff;
  .px2rem(height, 100);
  &-logo{
    a{
      .px2rem(width, 178);
      .px2rem(height, 75);
      .px2rem(margin-left, 28);
      .px2rem(margin-top, 13);
      display: block;
      background: url(../../../common/images/logo-header.png) no-repeat 0 0;
      background-size: 100% 100%;
    }
    span{
      .px2rem(font-size, 37);
      .px2rem(margin-left, 29);
      .px2rem(line-height, 100);
      color: @color-header-txt;
    }
  }
  &-icon{
    span{
      .px2rem(width, 45);
      .px2rem(height, 45);
      .px2rem(line-height, 45);
      .px2rem(margin-right, 20);
      .px2rem(margin-top, 28);
      text-align: center;
      display: block;
    }
    .icon-more{
      .px2rem(width, 9);
      .px2rem(height, 45);
      background-image: url(../../../common/images/icon-7.png);
    }
  }
}
</style>
