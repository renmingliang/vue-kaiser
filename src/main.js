// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

import './common/less/reset.less'

// mock request
// import './mock'

// rem.js
import './utils/rem.js'

// lazy-load img
Vue.use(VueLazyload, {
  loading: require('common/images/lazy.gif')
})

/* fixed mobile click 300ms delay */
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
