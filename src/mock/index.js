import Mock from 'mockjs'
import ksAPI from './ks-api'

// 新闻相关
Mock.mock(/\/api\/news-list/, 'get', ksAPI.getNewsList)
Mock.mock(/\/api\/news-detail/, 'get', ksAPI.getNewsDetail)

// 管理团队
Mock.mock(/\/api\/team/, 'get', ksAPI.getTeamInfo)

// 娱乐产品
Mock.mock(/\/api\/products/, 'get', ksAPI.getProductList)

// 投资者关系
Mock.mock(/\/api\/stock/, 'get', ksAPI.getInvestInfo)

// 商务合作
Mock.mock(/\/api\/card/, 'get', ksAPI.getCardInfo)

// 联系我们
Mock.mock(/\/api\/contact/, 'get', ksAPI.getContactInfo)

// 轮播图
Mock.mock(/\/api\/scroll/, 'get', ksAPI.getBannerInfo)

// 发展历程
Mock.mock(/\/api\/past/, 'get', ksAPI.getPastInfo)

// 首页kv-img
Mock.mock(/\/api\/kv-img/, 'get', ksAPI.getKvImgInfo)

// 法律声明
Mock.mock(/\/api\/statement/, 'get', ksAPI.getStatementInfo)

export default Mock
