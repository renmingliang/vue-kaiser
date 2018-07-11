<template>
  <div v-show="opened" class="ks-header-menu" @touchmove.prevent>
    <div class="menu-logo">
     <h1>logo</h1>
      <span @click="handleClose('close')">
        <i class="icon-close"></i>
      </span>
    </div>
    <ul>
      <li v-for="(menu, index) in menus" :key="index">
        <p @click="handleClose(menu)">
          <i :class="`icon-${menu.icon}`"></i>
          <span>{{menu.text}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menus: [
        {id: 0, path: '/index', text: '首页', icon: 'index'},
        {id: 1, path: '/about', text: '关于凯撒', icon: 'about'},
        {id: 2, path: '/news', text: '新闻动态', icon: 'news'},
        {id: 3, path: '/product', text: '泛娱乐产品', icon: 'product'},
        {id: 4, path: '/relation', text: '投资者关系', icon: 'relation'},
        {id: 5, path: '/contact', text: '联系我们', icon: 'contact'}
      ]
    }
  },
  methods: {
    // 父子组件通信 --> 关闭菜单
    handleClose(menu) {
      if (menu.path) {
        this.$router.push({path: menu.path})
      }
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-header-menu{
  width: 100%;
  position: fixed;
  text-align: center;
  background-color: @color-header-bg;
  left: 50%;
  bottom: 0;
  top: 0;
  z-index: 2;
  min-width: 320px;
  max-width: 750px;
  transform: translateX(-50%);
  .px2rem(font-size, 30);
  .px2rem(line-height, 100);
  .menu-logo{
    position: relative;
    .px2rem(padding-top, 29);
    .px2rem(margin-bottom, 50);
    h1{
      .px2rem(width, 178);
      .px2rem(height, 75);
      text-indent: 9999em;
      display: inline-block;
      background: url(../../../common/images/logo-header.png) no-repeat 0 0;
      background-size: 100% 100%;
    }
    span{
      .px2rem(width, 45);
      .px2rem(right, 20);
      .px2rem(top, 12);
      position: absolute;
      text-align: center;
      display: block;
    }
    .icon-close{
      .px2rem(width, 23);
      .px2rem(height, 23);
      background-image: url(../../../common/images/icon-8.png);
    }
  }
  ul{
    background-color: @color-header-bg;
      li{
      position: relative;
      .border-1px(bottom, @color-menu-line);
      [class*=icon-]{
        .px2rem(width, 27);
        .px2rem(height, 27);
        .px2rem(vertical-align, -4);
      }
      .icon-index{
        .px2rem(width, 33);
        background-image: url(../../../common/images/icon-1.png);
      }
      .icon-about{
        background-image: url(../../../common/images/icon-2.png);
      }
      .icon-news{
        .px2rem(width, 33);
        background-image: url(../../../common/images/icon-3.png);
      }
      .icon-product{
        background-image: url(../../../common/images/icon-4.png);
      }
      .icon-relation{
        background-image: url(../../../common/images/icon-5.png);
      }
      .icon-contact{
        .px2rem(width, 20);
        background-image: url(../../../common/images/icon-6.png);
      }
    }
  }
}
</style>
