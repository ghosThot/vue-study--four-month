import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import create from '@/utils/create';

import './ts-test'

// import router from './router'
import router from './krouter'

// import store from './store'
import store from './kstore'
// import Notice from '@/components/Notice.vue';

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()

// Vue.prototype.$notice = function (props) {
//   return create(Notice, props)
// }
Vue.use(create)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
