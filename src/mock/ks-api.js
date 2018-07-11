import Mock from 'mockjs'
import { param2Obj } from '@/utils'

// 模拟新闻数据
const newsList = []
const count = 50
const limit = 4
for (let i = 0; i < count; i++) {
  newsList.push(Mock.mock({
    id: '@increment',
    title: '@ctitle(8, 18)',
    summary: '@cparagraph()',
    context: '<p>以下是测试数据不变</p><p><span>导语：起点白金作家<strong>忘语</strong>的第三本网络奇幻修真类小说<strong>《玄界之门》</strong>官方授权漫画已于<strong>6月28日</strong>开始在<strong>腾讯动漫</strong>独家连载啦。该漫画由<strong>凯撒文化</strong>与<strong>合火人工作室</strong>携手合作。</span></p><p><span>小说改编漫画市场近年来可谓是日新月异。在玄幻的世界里，一批像萧炎、林动、韩立这样的主角大咖更是人气惊人，近来有个来自东洲的玄幻界新星更以万夫莫敌之势出现在玄幻英雄之列，腾讯动漫网页/手机客户端首页、推荐区经常能捕捉到他的身影。</span></p><p><span>凯撒文化作为以精品IP为核心的泛娱乐一体化运营商，对优质IP向来不乏敏锐的嗅觉，在玄幻新星出没之初，便慷慨收入麾下。这位叫做石牧的少年新星，将以漫画主人公的崭新形象，出现在由凯撒文化与绘制《超正能量魔王》的合火人工作室联合打造的小说改编漫画《玄界之门》里。</span></p><p><span>凯撒文化诚意邀约阅文集团白金作家即原作者忘语作为高级顾问，全程参与石牧的少年成长记。在合作过程中，忘语多次表示漫画改编品质精良，人物形象贴合原著，无疑给期待《玄界之门》的漫友们下了一颗强效定心丸，小伙伴们就暗戳戳地放一万个心观看吧！</span></p><p><span><br></span></p><p style="text-align: center;"><span>&nbsp;</span><img src="http://kskfcdn.ksgame.com/group1/M00/00/00/Ch4BCVpDSJ-ABA9sAAx0TDhzwOg970.png" style="font-family: &quot;helvetica neue&quot;, arial, &quot;hiragino sans gb&quot;, stheiti, &quot;wenquanyi micro hei&quot;, 微软雅黑, 宋体, sans-serif; vertical-align: middle;" class=""></p><p style="text-align: center;"><span><br></span></p><p style="text-align: center;"><span>（玄界之门漫画人物版海报）</span></p><p><span>&nbsp;</span></p><p><span>凯撒文化漫画《玄界之门》讲述渔村少年石牧，在经历母亲病逝和身世冲突后，意外卷入一场热血冒险的玄幻之旅，层出不穷的磨难与机遇，让少年终于成长为叱咤星河，力霸天地的至强者。</span></p><p><span>这部漫画几经雕琢，于6月28日完成首秀，正式上线！看到这里，如果还不明真相的小伙伴只需要记住：凯撒文化《玄界之门》漫画、腾讯动漫、看渔村少年如何谱写一段叱咤星河，大闹三界的传说！</span><span style="text-align: center; font-family: &quot;helvetica neue&quot;, arial, &quot;hiragino sans gb&quot;, stheiti, &quot;wenquanyi micro hei&quot;, 微软雅黑, 宋体, sans-serif;">&nbsp;</span></p><p><!--StartFragment--><!--EndFragment--></p><p><span>相爱相杀！正邪对峙！美女英雄！炫酷激战！凯撒文化《玄界之门》漫画将把全部的英雄信仰和热血梦想都精彩呈现在小伙伴面前。打开腾讯动漫网页or下载腾讯动漫app，搜索<strong>《玄界之门》漫画</strong>，少年励志征程即可展开！</span><u style="font-family: &quot;helvetica neue&quot;, arial, &quot;hiragino sans gb&quot;, stheiti, &quot;wenquanyi micro hei&quot;, 微软雅黑, 宋体, sans-serif;"><font color="#ffffff"><a href="http://ac.qq.com/Comic/comicInfo/id/622803" target="_blank">点击观看&gt;&gt;</a></font></u></p><p><br></p>',
    image_url: '@image(278X154, #894FC4, #fff, png, mock.js)',
    created_at: '@datetime',
    updated_at: '@datetime',
    'release_time|1': ['2015-01-21 12:23:32', '2016-11-02 21:00:00', '2017-05-21 00:00:00', '2018-02-24 09:10:11'],
    'place_id|1-100': 100,
    is_display: 1
  }))
}

// 模拟产品数据
const productList = []
for (let i = 0; i < count; i++) {
  productList.push(Mock.mock({
    id: '@increment',
    title: '@ctitle(8, 18)',
    context: '<p>以下是测试数据不变</p><p><span>导语：起点白金作家<strong>忘语</strong>的第三本网络奇幻修真类小说<strong>《玄界之门》</strong>官方授权漫画已于<strong>6月28日</strong>开始在<strong>腾讯动漫</strong>独家连载啦。该漫画由<strong>凯撒文化</strong>与<strong>合火人工作室</strong>携手合作。</span></p><p><span>小说改编漫画市场近年来可谓是日新月异。在玄幻的世界里，一批像萧炎、林动、韩立这样的主角大咖更是人气惊人，近来有个来自东洲的玄幻界新星更以万夫莫敌之势出现在玄幻英雄之列，腾讯动漫网页/手机客户端首页、推荐区经常能捕捉到他的身影。</span></p><p><span>凯撒文化作为以精品IP为核心的泛娱乐一体化运营商，对优质IP向来不乏敏锐的嗅觉，在玄幻新星出没之初，便慷慨收入麾下。这位叫做石牧的少年新星，将以漫画主人公的崭新形象，出现在由凯撒文化与绘制《超正能量魔王》的合火人工作室联合打造的小说改编漫画《玄界之门》里。</span></p><p><span>凯撒文化诚意邀约阅文集团白金作家即原作者忘语作为高级顾问，全程参与石牧的少年成长记。在合作过程中，忘语多次表示漫画改编品质精良，人物形象贴合原著，无疑给期待《玄界之门》的漫友们下了一颗强效定心丸，小伙伴们就暗戳戳地放一万个心观看吧！</span></p><p><span><br></span></p><p style="text-align: center;"><span>&nbsp;</span><img src="http://kskfcdn.ksgame.com/group1/M00/00/00/Ch4BCVpDSJ-ABA9sAAx0TDhzwOg970.png" style="font-family: &quot;helvetica neue&quot;, arial, &quot;hiragino sans gb&quot;, stheiti, &quot;wenquanyi micro hei&quot;, 微软雅黑, 宋体, sans-serif; vertical-align: middle;" class=""></p><p style="text-align: center;"><span><br></span></p><p style="text-align: center;"><span>（玄界之门漫画人物版海报）</span></p><p><span>&nbsp;</span></p><p><span>凯撒文化漫画《玄界之门》讲述渔村少年石牧，在经历母亲病逝和身世冲突后，意外卷入一场热血冒险的玄幻之旅，层出不穷的磨难与机遇，让少年终于成长为叱咤星河，力霸天地的至强者。</span></p><p><span>这部漫画几经雕琢，于6月28日完成首秀，正式上线！看到这里，如果还不明真相的小伙伴只需要记住：凯撒文化《玄界之门》漫画、腾讯动漫、看渔村少年如何谱写一段叱咤星河，大闹三界的传说！</span><span style="text-align: center; font-family: &quot;helvetica neue&quot;, arial, &quot;hiragino sans gb&quot;, stheiti, &quot;wenquanyi micro hei&quot;, 微软雅黑, 宋体, sans-serif;">&nbsp;</span></p><p><!--StartFragment--><!--EndFragment--></p><p><span>相爱相杀！正邪对峙！美女英雄！炫酷激战！凯撒文化《玄界之门》漫画将把全部的英雄信仰和热血梦想都精彩呈现在小伙伴面前。打开腾讯动漫网页or下载腾讯动漫app，搜索<strong>《玄界之门》漫画</strong>，少年励志征程即可展开！</span><u style="font-family: &quot;helvetica neue&quot;, arial, &quot;hiragino sans gb&quot;, stheiti, &quot;wenquanyi micro hei&quot;, 微软雅黑, 宋体, sans-serif;"><font color="#ffffff"><a href="http://ac.qq.com/Comic/comicInfo/id/622803" target="_blank">点击观看&gt;&gt;</a></font></u></p><p><br></p>',
    image_url: '@image(700X400, #894FC4, #fff, png, mock.js)',
    created_at: '@datetime',
    updated_at: '@datetime',
    release_time: '@now',
    author_name: '@cname',
    author_img: '@image(73X79, #1244C4, #fff, png, author)',
    'author_job|1': ['中国漫画家', '日本漫画家', '韩国漫画家'],
    'cid|1': ['IP', 'GAME', 'CARTOON', 'MOVIE']
  }))
}

// 模拟股价信息
const relationInfo = Mock.mock({
  name: '凯撒文化',
  code: '002454',
  'money|7-10.2-2': 1,
  unit: 'RMB',
  date: '@now',
  'maxValue|7-10.2-2': 1,
  'minValue|7-10.2-2': 1,
  'totalCount|50000-60000.2-2': 52950.41,
  'totalValue|4000-5000.2-2': 3918.45,
  'totalMoney|60-100.2-2': 60.54
})

// 团队信息
const teamInfo = [
  { id: 0, job: '董事长', image_url: require('../common/images/team-1.png'), name: '郑合明', context: '<p>1994年创立凯撒（汕头）有限公司，从事高端服饰设计与生产，与日本三菱集团、伊藤忠商事株式会社、 意大利loro piana、CERRUTI和杰尼亚等国际顶级伙伴合作，在国际上享有良好声誉。</p><p>2014年公司布局综合性娱乐领域后，先后与集英社、皮乐、光荣特库摩、台湾大宇、腾讯、上海美术电影制片厂等知名企业合作，成功研发多款知名IP手游。</p><p>现为凯撒（中国）文化股份有限公司实际控制人。</p>' },
  { id: 1, job: 'CEO', image_url: require('../common/images/team-2.png'), name: '吴裔敏', context: '<p>中国游戏行业知名游戏人，拥有15年的网游从业经历，对游戏行业有着深刻理解，有极为丰富的产品运营和团队管理经验。</p><p>曾任腾讯游戏合作产品部总监，盛大游戏系统总经理，金山游戏总裁兼集团副总裁；</p><p>主导和负责过的产品：</p><p>《穿越火线》（全球第一FPS游戏，月流水近7亿）</p><p>《剑侠情缘网络版3》（中国第一武侠网游）</p><p>《英雄连Online》、《功夫世界》、《吞食天地2Online》等多款知名网络游戏。</p>' },
  { id: 2, job: 'COO', image_url: require('../common/images/team-3.png'), name: '熊波', context: '<p>2016年12月，荣获2016年游联社高峰论坛暨游鼎奖“年度十大风云人物”奖；</p><p>2015年至今，任凯撒文化（002425.SZ）董事&首席运营官；</p><p>2012年-2015年，联合创办上海逸趣网络科技有限公司，并任运营总监；</p><p>2010年-2012年，任金山游戏运营支持部副总监，参与项目包括：剑网3、剑侠情缘1、剑侠情缘2、剑侠世界等；</p><p>2007年-2010年，任职腾讯互娱运营部运营规划PM，参与项目包括QQ炫舞，穿越火线、QQ西游等；</p><p>2005年-2007年，在富士康集团任职系统工程师。</p>' }
]

// 商务合作
const cardInfo = [
  {
    'id': '1',
    'name': '1_匡峰1',
    'type': '商务合作',
    'email': '12345@qq.com',
    'created_at': '2017-11-15 14:20:19',
    'updated_at': '2017-11-15 14:20:23'
  },
  {
    'id': '4',
    'name': '2_sdsd',
    'type': 'sds',
    'email': '27135@qq.com',
    'created_at': '2017-11-17 17:58:34',
    'updated_at': '2017-11-17 17:58:34'
  }
]

// 联系我们
const contactInfo = {
  'id': '1',
  'company': '凯撒（中国）文化股份有限公司',
  'address': '深圳市南山区科兴科学园A2-9层',
  'image_url': 'http://10.10.40.33/group1/M00/00/01/CgooIVnPbJeAUsoJAAGvHyQtE5A252.jpg',
  'link': 'http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E5%87%AF%E6%92%92%EF%BC%88%E4%B8%AD%E5%9B%BD%EF%BC%89%E6%96%87%E5%8C%96',
  'linkman': '518057',
  'email': '271356533@qq.com',
  'created_at': '2017-09-28 17:50:47',
  'updated_at': '2017-11-22 00:13:41'
}

// 轮播图
const bannerInfo = [
  {
    linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
    picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
    id: 11378
  },
  {
    linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
    picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
    id: 11375
  },
  {
    linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
    picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
    id: 11287
  }
]

// 发展历程
const pastInfo = {
  '1994': [
    {
      id: 0,
      image_url: '',
      description: '凯撒（汕头）有限公司在汕头成立',
      color: '2'
    }
  ],
  '2010': [
    {
      id: 1,
      image_url: '',
      description: '深交所 A 股上市',
      color: '2'
    }
  ],
  '2014': [
    {
      id: 2,
      image_url: '',
      description: '布局互联网 “泛娱乐”',
      color: '2'
    }
  ],
  '2015': [
    {
      id: 3,
      image_url: '',
      description: '研发《仙剑奇侠传3D》并在东南亚发行',
      color: '1'
    }
  ],
  '2016': [
    {
      id: 4,
      image_url: '',
      description: '正式更名凯撒文化',
      color: '2'
    },
    {
      id: 5,
      image_url: '',
      description: '和腾讯达成 IP授权 重大合作',
      color: '2'
    },
    {
      id: 6,
      image_url: '',
      description: '研发《圣斗士星矢·重生》',
      color: '1'
    },
    {
      id: 7,
      image_url: '',
      description: '联合出品动画《新葫芦兄弟》',
      color: '2'
    }
  ],
  '2017': [
    {
      id: 8,
      image_url: '',
      description: '研发《轩辕剑3》手游版',
      color: '1'
    },
    {
      id: 9,
      image_url: '',
      description: '研发《传奇世界》并在微信游戏中上线',
      color: '1'
    },
    {
      id: 10,
      image_url: '',
      description: '联合出品3D国漫动画《少年锦衣卫》',
      color: '1'
    },
    {
      id: 11,
      image_url: '',
      description: '出品漫画《玄界之门》',
      color: '1'
    },
    {
      id: 12,
      image_url: '',
      description: '研发并联合发行游戏《三国志2017》',
      color: '2'
    }
  ],
  '2018': [
    {
      id: 13,
      image_url: '',
      description: '将推出《从前有座灵剑山》《锦绣未央》《银之守墓人》等手游',
      color: '1'
    }
  ]
}

// KV-img
const kvImgInfo = [
  { id: 0, wap_image_url: require('../../common/images/layout-part-1.png'), cid: 'IP', name: 'IP 运营', e_name: 'IP OPERATION' },
  { id: 1, wap_image_url: require('../../common/images/layout-part-2.png'), cid: 'GAME', name: '动 漫', e_name: 'COMIC AND ANIMATION' },
  { id: 2, wap_image_url: require('../../common/images/layout-part-3.png'), cid: 'CARTOON', name: '游 戏', e_name: 'MOBILE GAMES' },
  { id: 3, wap_image_url: require('../../common/images/layout-part-4.png'), cid: 'MOVIE', name: '影 视', e_name: 'FILM AND TELEVISION' }
]

// KV-img
const statementInfo = {
  'id': '2',
  'link': 'http://10.10.40.33:8433/statement/edit-banner',
  'image_url': 'http://10.10.40.33/group1/M00/00/01/CgooIVncpq-AMMKRAAUCbLd6fGg879.jpg',
  'context': '<p>\r\n                1、本网所有页面设计、文字、图片、数据、音视频或其他形式的资料，<br>\r\n                其版权、商标权等全部知识产权均完全属凯撒（中国）文化股份有限公司独家所有，受法律保护，<br>\r\n                任何媒体、网站、企业、其他组织或个人未经本公司书面授权<br>\r\n                不得以任何理由下载、转载、链接、转贴、复制、截图、修改、抄录、摘录或以其他方式发布、发表、传播或使用。<br>\r\n                已经本公司书面授权的媒体、网站、企业、其他组织或个人，在使用时必须注明“来源:”凯撒官网”；<br>\r\n                未经本公司的书面许可，任何企业、其他组织或个人不得复制或在非本公司网站所属的服务器上做镜像；对违反者本公司将依法追究法律责任。<br>\r\n            </p><p>\r\n                2、凡本网来源于本网以外的其他媒体的文字、图片、数据、音视频或其他形式的资料，本网转载系出于传递更多信息之目的，<br>\r\n                并不意味着本网赞同其观点或确认其内容的真实性、准确性或完整性，使用者未取得权利人同意而使用相关内容，其后果和相关法律责任由使用者自行承担。<br>\r\n            </p><p>\r\n                3、转载或使用本网内容必须是以新闻性或资料性公共免费信息为使用目的的合理、善意使用,<br>\r\n                不得对本网内容原意进行曲解、修改,不得将本网内容用于对本网或本网版权单位不利的营利性或非营利性活动中，<br>\r\n                在使用同时必须保留本网注明的文件“来源”，并自行承担版权保护、反不正当竞争等法律责任。<br>\r\n            </p><p>\r\n                4、转载或使用本网内容不得进行如下活动：<br>\r\n                A.损害本网、本网版权单位或他人利益；<br>\r\n                B.任何违法行为；<br>\r\n                C.任何可能破坏公秩良俗的行为；<br>\r\n                D.擅自同意他人继续转载、使用本网内容的行为。<br>\r\n            </p><p>\r\n                5、转载或使用本网版权所有之内容须注明“来源：“凯撒官网”字样,并标明本网网址WWW.KAISER.COM.CN。\r\n            </p><p>\r\n                6、对于未按法律规定和本版权法律声明进行的不当转载或使用本网内容而引起的民事纷争、行政处罚或其他损失，<br>\r\n                本网不承担任何责任，由不当使用者自行承担法律责任。\r\n            </p><p>\r\n                7、对不遵守本声明或其他违法、侵权或恶意使用本网内容者，本网将行政诉讼、民事诉讼等法律手段依法追究其法律责任，对涉嫌犯罪的，本网必将依法追究其刑事责任。\r\n            </p>',
  'created_at': '2017-09-29 11:56:58',
  'updated_at': '2017-10-10 18:53:35'
}

export default {
  getNewsList: config => {
    const { page, time } = param2Obj(config.body)

    let mockList = newsList.filter(item => {
      return item.release_time.substr(0, 4) === time
    })

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 10000,
      msg: 'success',
      data: pageList,
      pageCount: Math.ceil(mockList.length / limit),
      pageIndex: +page
    }
  },
  getNewsDetail: config => {
    // const id = config.url.match(/\d+$/g)[0]
    const { id } = param2Obj(config.body)
    const article = newsList.filter((item, index) => {
      return +id === item.id
    })
    return {
      code: 10000,
      msg: 'success',
      data: article[0]
    }
  },
  getProductList: config => {
    const { page, cid } = param2Obj(config.body)

    let mockList = productList.filter(item => {
      return item.cid === cid
    })

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 10000,
      msg: 'success',
      name: 'IP运营',
      summary: '凯撒文化建立了健全的IP接触、筛选、评估、合同签署引入机制，与海内外IP资源公司建立了紧密合作关系，持续挖掘甄别并引入优质IP。 国内IP储备方面，凯撒文化在2016年获得腾讯动漫旗下10个重量级明星IP授权，包括《从前有座灵剑山》、《银之守墓人》、《我的天劫女友》等，基本囊括了腾讯动漫最具人气的动漫作品。国际IP储备方面，凯撒文化持续引入《妖精的尾巴》《幽游白书》等多个全球顶级IP授权。 目前，凯撒文化已建立优质IP资源库，将继续以精品IP为核心，注重传承IP原著精神，向用户传达作者理念，用专业放大IP价值，回馈粉丝。',
      data: pageList,
      pageCount: Math.ceil(mockList.length / limit),
      pageIndex: +page
    }
  },
  getInvestInfo: config => {
    return {
      code: 10000,
      msg: 'success',
      data: relationInfo
    }
  },
  getTeamInfo: config => {
    return {
      code: 10000,
      msg: 'success',
      data: teamInfo
    }
  },
  getCardInfo: config => {
    return {
      code: 10000,
      msg: 'success',
      data: cardInfo
    }
  },
  getBannerInfo: config => {
    return {
      code: 10000,
      msg: 'success',
      data: bannerInfo
    }
  },
  getContactInfo: config => {
    return {
      code: 10000,
      msg: 'success',
      data: contactInfo
    }
  },
  getPastInfo: config => {
    return {
      code: 10000,
      msg: 'success',
      data: pastInfo
    }
  },
  getKvImgInfo: config => {
    return {
      code: 10000,
      msg: 'success',
      data: kvImgInfo
    }
  },
  getStatementInfo: config => {
    return {
      code: 10000,
      msg: 'success',
      data: statementInfo
    }
  }
}
