<template>
  <div>
    <ks-nav :navs="navs"></ks-nav>
    <div class="ks-about mt-1">
      <div v-show="showAboutImg" class="ks-about-img">
        <img src="../../common/images/banner-intro.png">
      </div>
      <div class="ks-about-wrap">
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import KsNav from 'components/KsNav'
import Glory from './glory/glory'
import Invest from './invest/invest'
import Partner from './partner/partner'
import Team from './team/team'
import Introduce from './introduce/introduce'

export default {
  data() {
    return {
      showAboutImg: 'true',
      currentView: 'Introduce',
      navs: [
        {id: 0, path: 'index', query: { tab: 'Introduce' }, text: '公司介绍'},
        {id: 1, path: 'index', query: { tab: 'Invest' }, text: '参投公司'},
        {id: 2, path: 'index', query: { tab: 'Partner' }, text: '旗下公司'},
        {id: 3, path: 'index', query: { tab: 'Team' }, text: '管理团队'},
        {id: 4, path: 'index', query: { tab: 'Glory' }, text: '企业荣誉'}
      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    const tabName = to.query.tab
    next(vm => vm.setComponent(tabName))
  },
  beforeRouteUpdate(to, from, next) {
    const tabName = to.query.tab
    this.setComponent(tabName)
    next()
  },
  methods: {
    setComponent(tabName) {
      if (tabName === 'Invest') {
        this.showAboutImg = false
      } else {
        this.showAboutImg = true
      }
      this.currentView = tabName || 'Introduce'
    }
  },
  components: {
    KsNav,
    Glory,
    Invest,
    Partner,
    Team,
    Introduce
  }
}
</script>

<style scoped lang="less">
@import "~common/less/class.less";
</style>
