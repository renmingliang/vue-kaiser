import request from '@/utils/request'
import config from '@/utils/config'

/* 1、新闻列表 */
export function getNewsList(data) {
  const { time, page } = data
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: `${config.news.listUrl}?time=${time}&page=${page}`
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 2、新闻详情 */
export function getNewsDetail(data) {
  const { id } = data
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: `${config.news.detailUrl}?id=${id}`
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 3、产品列表 */
export function getProductList(data) {
  const { cid, page } = data
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: `${config.product.listUrl}?cid=${cid}&page=${page}`
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 4、投资者关系 --> 股价信息 */
export function getRelationInfo() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.relation.url
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 5、投资者关系 --> 团队信息 */
export function getTeamInfo() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.about.team.url
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 6、轮播图 */
export function getBanner() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.home.bannerUrl
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 7、商务合作 */
export function getContactCard() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.contact.cardUrl
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 8、联系我们 */
export function getContact() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.contact.url
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 9、发展历程 */
export function getPast() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.home.pastUrl
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 10、产品图 */
export function getKvImg() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.home.kvImgUrl
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

/* 11、法律声明 */
export function getStatement() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.statement.url
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

// 12、股价
export function getGuPiaoJs() {
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: config.relation.guPiaoUrl
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}

// 13、轮播图详情
export function getScrollDetail(data) {
  const { id } = data
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url: `${config.home.detailUrl}?id=${id}`
    }).then(
      // 这里是处理正确的回调
      res => {
        resolve(res)
      },
      // 这里是处理错误的回调
      err => {
        reject(err)
      }
    )
  })
}
