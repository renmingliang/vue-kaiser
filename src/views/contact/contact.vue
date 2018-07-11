<template>
  <div class="ks-contact mt-1">
    <div class="ks-contact-img">
      <img src="../../common/images/banner-contact.png" alt="联系我们">
    </div>
    <div class="ks-contact-wrap mt-1">
      <div class="wrap-list">
        <h3>商务合作</h3>
        <span class="under-line"></span>
        <div class="list-hz">
          <ul>
            <li v-for="(card, index) in cards" :key="index">
              <p class="hz-title">{{card.type}}</p>
              <p>联系人：{{card.name}}</p>
              <p>邮&nbsp;&nbsp;&nbsp;箱：{{card.email}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrap-list mt-1">
        <h3>联系我们</h3>
        <span class="under-line"></span>
        <div v-if="contact" class="list-lx">
          <div @click="showAction" class="lx-map">
            <img :src="contact.image_url">
          </div>
          <ul class="lx-info">
            <li>
              <p>公司名称:</p>
              <p>{{contact.company}}</p>
            </li>
            <li>
              <p>公司地址:</p>
              <p>{{contact.address}}</p>
            </li>
            <li>
              <p>邮政编码:</p>
              <p>{{contact.email}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrap-list mt-1">
        <h3>合作伙伴</h3>
        <span class="under-line"></span>
        <div class="list-hb">
          <p class="hb-txt">凯撒文化的IP运营、手游研发、动漫影视剧投资运作等实力已获得行业的高度认可，数十家行业知名企业已与凯撒文化建立合作伙伴关系</p>
          <div class="hb-info">
            <ul class="clearfix">
              <li class="float-l text-center" v-for="(part, index) in partners" :key="index">
                <img v-lazy="part.src">
              </li>
            </ul>
            <p class="hb-txt text-center">以上为部分合作伙伴，排名不分先后</p>
          </div>
        </div>
      </div>
    </div>
    <actionsheet v-if="menus" :status="show" :menus="menus" v-on:click-menu="clickItem"></actionsheet>
  </div>
</template>

<script type="text/ecmascript-6">
import { getContactCard, getContact } from '@/api'
import Actionsheet from 'components/Actionsheet'

export default {
  data() {
    return {
      show: false,
      menus: null,
      contact: null,
      cards: [],
      partners: [
        {id: 0, src: require('../../common/images/partner-icon-1.png'), name: '1'},
        {id: 1, src: require('../../common/images/partner-icon-2.png'), name: '2'},
        {id: 2, src: require('../../common/images/partner-icon-3.png'), name: '3'},
        {id: 3, src: require('../../common/images/partner-icon-4.png'), name: '4'},
        {id: 4, src: require('../../common/images/partner-icon-5.png'), name: '5'},
        {id: 5, src: require('../../common/images/partner-icon-6.png'), name: '6'},
        {id: 6, src: require('../../common/images/partner-icon-7.png'), name: '7'},
        {id: 7, src: require('../../common/images/partner-icon-8.png'), name: '8'},
        {id: 8, src: require('../../common/images/partner-icon-9.png'), name: '9'},
        {id: 9, src: require('../../common/images/partner-icon-10.png'), name: '10'},
        {id: 10, src: require('../../common/images/partner-icon-11.png'), name: '11'},
        {id: 11, src: require('../../common/images/partner-icon-12.png'), name: '12'},
        {id: 12, src: require('../../common/images/partner-icon-13.png'), name: '13'},
        {id: 13, src: require('../../common/images/partner-icon-14.png'), name: '14'},
        {id: 14, src: require('../../common/images/partner-icon-15.png'), name: '15'},
        {id: 15, src: require('../../common/images/partner-icon-16.png'), name: '16'},
        {id: 16, src: require('../../common/images/partner-icon-17.png'), name: '17'},
        {id: 17, src: require('../../common/images/partner-icon-18.png'), name: '18'},
        {id: 18, src: require('../../common/images/partner-icon-19.png'), name: '19'},
        {id: 19, src: require('../../common/images/partner-icon-20.png'), name: '20'},
        {id: 20, src: require('../../common/images/partner-icon-21.png'), name: '21'},
        {id: 21, src: require('../../common/images/partner-icon-22.png'), name: '22'},
        {id: 22, src: require('../../common/images/partner-icon-23.png'), name: '23'},
        {id: 23, src: require('../../common/images/partner-icon-24.png'), name: '24'}
      ]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getContact().then(res => {
        // console.log(res)
        if (res.data.code === 10000) {
          this.contact = res.data.data
          this.menus = [{id: 0, txt: '百度地图', href: res.data.data.link}]
        }
      })
      getContactCard().then(res => {
        // console.log(res)
        if (res.data.code === 10000) {
          this.cards = res.data.data
        }
      })
    },
    clickItem(item) {
      this.show = false
      // console.log(item)
    },
    showAction() {
      this.show = true
    }
  },
  components: {
    Actionsheet
  }
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-contact{
  &-img{
    background: @color-contact-bg;
  }
  &-wrap{
    .wrap-list{
      .px2rem(padding-top, 56);
      .px2rem(padding-bottom, 100);
      .px2rem(padding-left, 60);
      .px2rem(padding-right, 56);
      color: @color-contact-txt;
      &:first-child{
        background-color: @color-contact-hz;
      }
      &:nth-child(2){
        background-color: @color-contact-lx;
      }
      &:nth-child(3){
        background-color: @color-contact-hb;
        h3{
          color: @color-lx-title;
        }
      }
      h3{
        .px2rem(font-size, 44);
        color: @color-fff;
        font-weight: 700;
      }
      .under-line{
        .px2rem(margin-top, 12);
        .line-style(80, 6, @color-contact-line);
      }
      .list-hz{
        li{
          .px2rem(margin-top, 50);
          .px2rem(padding-bottom, 30);
          background-color: @color-hz-bg;
          p{
            .px2rem(padding-left, 60);
            .px2rem(line-height, 50);
            .px2rem(font-size, 30);
            &.hz-title{
              .px2rem(font-size, 29);
              .px2rem(line-height, 65);
              .px2rem(margin-bottom, 36);
              color: @color-fff;
              background-color: @color-hz-title;
            }
          }
        }
      }
      .list-lx{
        .px2rem(margin-top, 30);
        .lx-info{
          .px2rem(font-size, 26);
          .px2rem(line-height, 40);
          color: @color-fff;
          li{
            .px2rem(margin-top, 30);
            .px2rem(margin-bottom, 10);
          }
        }
      }
      .list-hb{
        .hb-txt{
          .px2rem(font-size, 24);
          .px2rem(line-height, 34);
          .px2rem(margin-top, 25);
        }
        .hb-info{
          .px2rem(padding-top, 90);
          li{
            .px2rem(width, 181);
            .px2rem(height, 181);
            .px2rem(line-height, 181);
            &:not(:nth-child(3n)){
              .px2rem(margin-right, 44);
              .px2rem(margin-bottom, 26);
            }
          }
        }
      }
    }
  }
}
</style>
