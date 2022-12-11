//老父亲
import Vue from 'vue'

//所有组件的管理者APP
import App from './App.vue'

//Vuex
import store from './store/index.js'

//自己配置的路由器
import router from './router/index.js'

//路由父亲
import VueRouter from 'vue-router'

//样式父亲
import ElementUI from 'element-ui'

//引入全部样式
import 'element-ui/lib/theme-chalk/index.css'

//引入echarts
import * as echarts from 'echarts';

import {VueJsonp} from 'vue-jsonp'
Vue.use(VueJsonp)
//使用路由插件
Vue.use(VueRouter)

//使用样式插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store:store,
  router:router,
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this
    Vue.prototype.$echarts = echarts
  }
}).$mount('#app')
