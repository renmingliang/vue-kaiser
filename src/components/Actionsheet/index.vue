<template>
  <div :class="classObject" @touchmove.prevent>
    <div class="actionsheet-mask" @click="clickMask"></div>
    <div class="actionsheet-content">
      <div class="content-menu">
        <div class="content-cell" v-for="(menu, index) in menus" :key="index" @click="clickMenu(menu)">
          <a :href="menu.href? menu.href : 'javascript:;'" target="_blank">{{menu.txt}}</a>
        </div>
      </div>
      <div class="content-menu">
        <div @click="clickMenu('cancel')" class="content-cell">取消</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    status: {
      type: Boolean,
      default: true
    },
    menus: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    clickMenu(menu) {
      this.$emit('click-menu', menu)
    },
    clickMask() {
      this.$emit('click-mask')
    }
  },
  computed: {
    classObject() {
      return {
        actionsheet: true,
        active: this.status
      }
    }
  }
}
</script>

<style scoped lang="less">
.actionsheet{
  &.active{
    .actionsheet-mask{
      display: block;
    }
    .actionsheet-content{
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
  &-mask{
    z-index: 1000;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: none;
    background: rgba(0,0,0,.3);
  }
  &-content{
    max-width: 750px;
    z-index: 1001;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%);
    opacity: 0;
    backface-visibility: hidden;
    width: 100%;
    transition: transform .3s, opacity .3s;
    .content-menu{
      font-size: 17px;
      overflow: hidden;
      margin: 8px;
      background-color: #f7f7f7;
      border-radius: 4px;
      .content-cell{
        padding: 11px 15px;
        text-align: center;
        position: relative;
        &,a{
          display: block;
          color: #000;
        }
        &:after{
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 1px;
          content: '';
          -webkit-transform: scaleY(.5);
          transform: scaleY(.5);
          background-color: #c8c7cc;
        }
      }
    }
  }
}
</style>
