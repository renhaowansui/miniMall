import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入FastClick解决移动端300ms延时问题
import FastClick from 'fastclick'
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
// Toast
import Toast from 'components/common/toast/index'

FastClick.attach(document.body)
// 安装插件，会自动调用Toast对象的install方法，且传递vue对象过去
Vue.use(Toast)
// 安装图片懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('assets/img/loadImg.jpg')
})

Vue.config.productionTip = false
// 事件总线赋予对象
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
