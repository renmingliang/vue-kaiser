import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// layout
const Layout = (resolve) => {
  import('views/layout/layout').then((module) => {
    resolve(module)
  })
}

// index
const Index = (resolve) => {
  import('views/home/home').then((module) => {
    resolve(module)
  })
}

// about
const About = (resolve) => {
  import('views/about/about').then((module) => {
    resolve(module)
  })
}

// product
const Product = (resolve) => {
  import('views/product/product').then((module) => {
    resolve(module)
  })
}

// relation
const Relation = (resolve) => {
  import('views/relation/relation').then((module) => {
    resolve(module)
  })
}

// contact
const Contact = (resolve) => {
  import('views/contact/contact').then((module) => {
    resolve(module)
  })
}

// news --> list
const NewsList = (resolve) => {
  import('views/news/news-list/news-list').then((module) => {
    resolve(module)
  })
}

// news --> detail
const NewsDetail = (resolve) => {
  import('views/news/news-detail/news-detail').then((module) => {
    resolve(module)
  })
}

// scroll --> detail
const ScrollDetail = (resolve) => {
  import('views/scroll/scroll-detail/scroll-detail').then((module) => {
    resolve(module)
  })
}

// statement
const Statement = (resolve) => {
  import('views/statement/statement').then((module) => {
    resolve(module)
  })
}

// video
const Video = (resolve) => {
  import('views/video/video').then((module) => {
    resolve(module)
  })
}

/**
* 针对children字段说明
* name:'router-name'            路由名称
* path:'router-path'            路由路径（基于父组件相对路径）
* component:'component-name'    组件名称（首字母大写）
* meta : {
    title: 'title'              若为''，则表示header组件中显示logo照片，反之为对应标题
  }
**/
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/index',
      children: [
        {name: 'index', path: 'index', component: Index, meta: {title: ''}}
      ]
    },
    {
      path: '/product',
      component: Layout,
      redirect: '/product/list',
      children: [
        {name: 'product', path: 'list', component: Product, meta: {title: '泛娱乐产品'}}
      ]
    },
    {
      path: '/relation',
      component: Layout,
      redirect: '/relation/index',
      children: [
        {name: 'relation', path: 'index', component: Relation, meta: {title: '投资者关系'}}
      ]
    },
    {
      path: '/contact',
      component: Layout,
      redirect: '/contact/index',
      children: [
        {name: 'contact', path: 'index', component: Contact, meta: {title: '联系我们'}}
      ]
    },
    {
      path: '/news',
      component: Layout,
      redirect: '/news/list',
      children: [
        {name: 'list', path: 'list', component: NewsList, meta: {title: '新闻动态'}},
        {name: 'detail', path: 'detail/:id', component: NewsDetail, meta: {title: '新闻动态'}}
      ]
    },
    {
      path: '/scroll',
      component: Layout,
      redirect: '/scroll/detail',
      children: [
        { name: 'scroll-detail', path: 'detail', component: ScrollDetail, meta: { title: '新闻动态' } }
      ]
    },
    {
      path: '/about',
      component: Layout,
      redirect: '/about/index',
      children: [
        {name: 'about', path: 'index', component: About, meta: {title: '关于凯撒'}}
      ]
    },
    {
      path: '/statement',
      component: Layout,
      redirect: '/statement/index',
      children: [
        {name: 'statement', path: 'index', component: Statement, meta: {title: '法律声明'}}
      ]
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    }
  ]
})

export default router
