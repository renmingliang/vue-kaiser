// global config 注意: 所有接口均为mock测试，项目中需要自己替换
const config = {
  // 1.新闻相关
  news: {
    // 导航
    navs: [
      {id: 0, path: 'list', query: { time: '2018' }, text: '2018'},
      {id: 1, path: 'list', query: { time: '2017' }, text: '2017'},
      {id: 2, path: 'list', query: { time: '2016' }, text: '2016'},
      {id: 3, path: 'list', query: { time: '2015' }, text: '2015'}
    ],
    // 列表
    listUrl: '/api/news-list',
    // 详情
    detailUrl: '/api/news-detail',
    // Loading背景
    loadingBG: '',
    // 下拉加载
    pullUp: {
      threshold: 120,
      contentRefresh: '上拉加载更多',
      contentNoMore: ''
    }
  },
  // 2.产品相关
  product: {
    // 导航
    navs: [
      {id: 0, path: 'list', query: {cid: 'IP'}, text: 'IP运营'},
      {id: 1, path: 'list', query: {cid: 'GAME'}, text: '游戏'},
      {id: 2, path: 'list', query: {cid: 'CARTOON'}, text: '动漫'},
      {id: 3, path: 'list', query: {cid: 'MOVIE'}, text: '影视'}
    ],
    // 列表
    listUrl: '/api/products'
  },
  // 3.投资者关系
  relation: {
    // 股价
    url: '/api/stock',
    // 面板
    panels: [
      {id: 0, icon: 'icon-gg', href: 'http://www.cninfo.com.cn/information/companyinfo_n.html?fulltext?szsme002425', text: {en: 'Company Announcements', ch: '公司公告'}},
      {id: 1, icon: 'icon-bg', href: 'http://www.cninfo.com.cn/information/companyinfo.html?periodicalreport?szzq002425', text: {en: 'Financial Reports', ch: '财务报告'}},
      {id: 2, icon: 'icon-pt', href: 'http://irm.cninfo.com.cn/ssessgs/S002425/index.html', text: {en: 'Interactive Platform', ch: '互动平台'}}
    ]
  },
  // 4.关于我们
  about: {
    // 旗下公司
    partner: {
      company: [
        {
          id: 0, logo: 'tsyj', src: require('../common/images/logo-tsyj.png'), name: '四川天上友嘉网络科技有限公司', info: '<p>天上友嘉专注于IP移动游戏研发、运营和互联网泛娱乐化。拥有自主知识产权、成熟产品和团队、以及丰富的大型网站和网络游戏设计和管理经验，目前拥有超过400人的研发、美术以及运营团队。公司致力于创造优质的有IP的互动娱乐产品，持续扩大公司的品牌影响力，积极拓展公司海外业务，令中国互动娱乐产品走向世界。</p>', href: 'http://www.youkia.com'},
        {
          id: 1, logo: 'knyx', src: require('../common/images/logo-knyx.png'), name: '深圳市酷牛互动科技有限公司', info: '<p>深圳酷牛互动科技有限公司位于深圳市南山区科兴科学园，是一家充满朝气、研发迅速、合作紧密的新兴互联网公司</p><p>主营业务是移动端网络游戏</p><p>公司拥有大量知名IP，先后推出了《兄弟萌》、《唐门世界》、《绝世天府》、《太古仙域》等多款手机游戏</p><p>其中唐家三少授权的《唐门世界》更是获得创收5000万的优异业绩。</p>', href: 'http://www.szkuniu.com'},
        {
          id: 2, logo: 'hwkj', src: require('../common/images/logo-hwkj.png'), name: '杭州幻文科技有限公司', info: '<p>杭州幻文科技有限公司是中国领先的IP（知识产权）运营公司，凯撒股份（002425）旗下全资子公司。2013年7月正式开始运营，公司总部位于杭州，在北京、广州设有分公司。业务覆盖IP、文学、动漫、游戏、影视等业务。幻文科技现全面布局“泛娱乐”战略，着力打造互动娱乐生态系统。公司主要以移动互联网、优质IP为发力点，挖掘优秀IP资源，签约众多畅销图书IP、影视IP、动漫IP，游戏IP等。同时联合行业顶级游戏公司共同打造多款手机网络游戏，联合顶级影视公司打造多部影视作品。</p>', href: 'http://www.huanwen.com/'}
      ]
    },
    // 管理团队
    team: {
      url: '/api/team'
    }
  },
  // 5.首页
  home: {
    bannerUrl: '/api/scroll',
    pastUrl: '/api/past',
    kvImgUrl: '/api/kv-img',
    detailUrl: '/api/scroll-detail'
  },
  // 6.联系我们
  contact: {
    url: '/api/contact',
    cardUrl: '/api/card'
  },
  // 7.法律声明
  statement: {
    url: '/api/statement'
  }
}

export default config
