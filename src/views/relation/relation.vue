<template>
  <div class="ks-relation mt-1">
    <div v-if="shares" class="ks-relation-intro">
      <h2 class="intro-name">凯撒文化 002425</h2>
      <div class="intro-rmb">
        <span class="rmb-money">{{Number(shares[2]).toFixed(2)}}</span>
        <span class="rmb-unit">RMB</span>
      </div>
      <table class="intro-table">
        <tr class="table-title">
          <td>最高</td>
          <td>最低</td>
          <td>成交量(百股)</td>
          <td>成交总额(万)</td>
          <td>总市值(亿)</td>
        </tr>
        <tr>
          <td>{{Number(shares[3]).toFixed(2)}}</td>
          <td>{{Number(shares[4]).toFixed(2)}}</td>
          <td>{{(shares[7]/100).toFixed(2)}}</td>
          <td>{{(shares[8]/1e4).toFixed(2)}}</td>
          <td>{{shares[31]}}</td>
        </tr>
      </table>
      <div class="intro-txt">
        <p>截止 北京时间 {{shares[29]}} {{shares[30]}} *报价有十五分钟或以上延迟。资料来源： 新浪财经</p>
      </div>
    </div>
    <div class="ks-relation-list mt-1">
      <ul class="clearfix">
        <li class="list-item text-center float-l" v-for="(relation, index) in panels" :key="index">
          <a :href="relation.href" target="_blank">
            <i :class="relation.icon"></i>
            <p><span class="under-line"></span></p>
            <p class="item-ch">{{relation.text.ch}}</p>
            <p class="item-en">{{relation.text.en}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="ks-relation-service mt-1">
      <div class="service-img">
        <img src="../../common/images/relation-service.png" alt="投资者服务">
      </div>
      <div class="service-contact">
        <h3>投资者服务</h3>
        <div class="line-box">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="en">Investor Services</p>
        <div class="service-txt">
          <p>如果您想了解投资者关系方面的问题，请联系：</p>
          <div class="service-card">
            <dl class="card-info clearfix">
              <dt class="info-img"></dt>
              <dd class="info-man">
                <h4>邱先生</h4>
                <span class="under-line"></span>
                <p>联系方式：0755-26913931</p>
                <p>传真：0755-26918767</p>
                <p>邮箱：{{email}}</p>
              </dd>
            </dl>
            <ul class="card-icon clearfix">
              <li class="float-l">
                <a href="tel:0755-26913931">
                  <i class="icon-phone"></i>
                </a>
              </li>
              <li class="float-r">
                <div class="copy-email" :data-clipboard-text="email">
                  <i class="icon-email"></i>
                </div>
              </li>
            </ul>
          </div>
          <p>如果您想了解投资者关系方面的问题，请将邮件发到以上信箱。请提供您的姓名和联系方式，并请注明您是个人投资者还是机构投资者，如果您是机构投资者，请提供机构名称。我们会竭尽全力为您提供快速、准确、便利的服务。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import config from '@/utils/config'
import { getRelationInfo } from '@/api'

export default {
  data() {
    return {
      shares: null,
      email: 'kaiser@vip.163.com',
      panels: config.relation.panels
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getRelationInfo().then(res => {
        // console.log(res)
        this.shares = res.data
      })
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
@import "~common/less/mixin.less";

.ks-relation{
  &-intro{
    .px2rem(padding-top, 40);
    .px2rem(padding-left, 32);
    .px2rem(padding-right, 32);
    .px2rem(padding-bottom, 17);
    background: url(../../common/images/bg-relation.png) no-repeat;
    background-size: 100% 100%;
    .intro-name, .rmb-stop{
      .px2rem(font-size, 36);
      color: @color-fff;
    }
    .intro-rmb{
      .px2rem(margin-top, 40);
      color: @color-fff;
      .rmb-money{
        .px2rem(font-size, 78);
        .px2rem(margin-right, 17);
        color: @color-rmb;
      }
      .rmb-unit{
        .px2rem(font-size, 31);
      }
    }
    .intro-table{
      width: 100%;
      .px2rem(font-size, 20);
      .px2rem(margin-top, 41);
      .border-style(top, 2, #919bb9);
      .border-style(bottom, 2, #919bb9);
      color: @color-rmb-txt;
      td{
        .px2rem(padding-left, 12);
      }
      .table-title{
        td{
          .px2rem(padding-top, 12);
          .px2rem(padding-bottom, 36);
        }
      }
      tr:nth-child(2){
        td{
          .px2rem(padding-bottom, 16);
        }
      }
    }
    .intro-txt{
      .px2rem(font-size, 16);
      .px2rem(margin-top, 64);
      color: @color-rmb-txt;
      overflow: hidden;
      p{
        .scale(16);
      }
    }
  }
  &-list{
    .px2rem(padding-top, 58);
    .px2rem(padding-bottom, 49);
    background-color: @color-relation-list;
    .list-item{
      .px2rem(width, 206);
      .px2rem(height, 206);
      .px2rem(margin-left, 22);
      .px2rem(margin-right, 22);
      background-color: @color-nav-bg;
      position: relative;
      a{
        display: block;
      }
      .icon-gg{
        .px2rem(margin-top, 36);
        .px2rem(width, 43);
        .px2rem(height, 55);
        background-image: url(../../common/images/icon-gg.png);
      }
      .icon-bg{
        .px2rem(margin-top, 38);
        .px2rem(margin-bottom, 2);
        .px2rem(width, 54);
        .px2rem(height, 51);
        background-image: url(../../common/images/icon-bg.png);
      }
      .icon-pt{
        .px2rem(margin-top, 42);
        .px2rem(margin-bottom, 4);
        .px2rem(width, 46);
        .px2rem(height, 43);
        background-image: url(../../common/images/icon-pt.png);
      }
      .under-line{
        .line-style(108, 1, #656379);
        height: 1px;
      }
      .item-ch{
        .px2rem(margin-top, 12);
        .px2rem(margin-bottom, 5);
        .px2rem(font-size, 28);
        color: @color-fff;
      }
      .item-en{
        .no-wrap();
        .px2rem(margin-top, 8);
        .px2rem(font-size, 14);
        .px2rem(padding-left, 10);
        .px2rem(padding-right, 10);
        color: @color-fff-l;
      }
    }
  }
  &-service{
    .px2rem(padding-top, 42);
    .px2rem(padding-left, 46);
    .px2rem(padding-right, 45);
    .px2rem(padding-bottom, 70);
    background-color: @color-relation-service;
    .service-contact{
      color: @color-fff;
      h3{
        .px2rem(font-size, 55);
        .px2rem(margin-top, 47);
        .px2rem(letter-spacing, 12);
        font-weight: bolder;
      }
      .line-box{
        .px2rem(margin-top, 19);
        span{
          .line-style(299, 1, @color-service-line);
          display: block;
          &:nth-child(2){
            background: @color-fff;
          }
        }
      }
      .en{
        .px2rem(font-size, 24);
        .px2rem(margin-top, 16);
        .px2rem(letter-spacing, 2);
      }
      .service-txt{
        .px2rem(font-size, 24);
        .px2rem(line-height, 48);
        .px2rem(margin-top, 48);
        color: @color-service-txt;
        .service-card{
          .px2rem(margin-top, 30);
          .px2rem(margin-bottom, 30);
          background-color: @color-relation-list;
          .card-info{
            .px2rem(padding-left, 108);
            .px2rem(padding-top, 60);
            .px2rem(padding-bottom, 20);
            .info-img{
              .px2rem(width, 70);
              .px2rem(height, 70);
              .px2rem(margin-right, 40);
              float: left;
              background: url(../../common/images/card-head.png) no-repeat center center;
              background-size: 100% 100%;
            }
            .info-man{
              overflow: hidden;
              h4{
                .px2rem(font-size, 38)
              }
              .under-line{
                .px2rem(margin-top, 10);
                .px2rem(margin-bottom, 18);
                .line-style(85, 6, @color-card-line);
                display: block;
              }
            }
          }
          .card-icon{
            .px2rem(height, 66);
            .px2rem(line-height, 66);
            width: 100%;
            li{
              text-align: center;
              background-color: @color-card-icon;
              &:first-child{
                .px2rem(width, 326);
              }
              &:last-child{
                .px2rem(width, 330);
              }
              a{
                display: block;
              }
              .icon-phone{
                .px2rem(width, 38);
                .px2rem(height, 38);
                background-image: url(../../common/images/card-phone.png);
              }
              .icon-email{
                .px2rem(width, 40);
                .px2rem(height, 30);
                background-image: url(../../common/images/card-email.png);
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 414px){
  .ks-relation-list .item-en{
    .px2rem(font-size, 12);
  }
}
</style>
