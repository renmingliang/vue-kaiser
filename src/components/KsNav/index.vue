<template>
  <nav class="ks-nav mt-1">
    <ul>
      <li class="ks-nav-item" v-for="(nav, index) in navs" :key="index">
        <router-link :class="isActive(nav, index)?'nav-active':''" :to="{path: nav.path, query: nav.query}">{{nav.text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    navs: {
      type: Array
    }
  },
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {
    // 添加选中class类名
    isActive(nav, index) {
      let curItem = false
      const query = nav.query
      Object.keys(query).forEach((key) => {
        if (this.$route.query.hasOwnProperty(key)) {
          if (query[key] === this.$route.query[key]) {
            curItem = true
          }
        } else {
          curItem = index === 0
        }
      })
      return curItem
    }
  }
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-nav{
  .px2rem(height, 78);
  .px2rem(line-height, 78);
  .px2rem(font-size, 27);
  text-align: center;
  background-color: @color-nav-bg;
  ul{
    width: 100%;
    height: 100%;
    display: table;
    .ks-nav-item{
      display: table-cell;
      a{
        display: block;
        position: relative;
        &.nav-active{
          color: @color-nav-active;
          &:after{
            content: '';
            .px2rem(width, 26);
            .px2rem(height, 3);
            .poa-center();
            .px2rem(bottom, 14);
            top: auto;
            background-color: @color-nav-active;
          }
        }
      }
    }
  }
}
</style>
