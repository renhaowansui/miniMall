import Toast from './Toast.vue'

export default {
  install(vue){
    // 创建组件构造器
    const toastConstructor = vue.extend(Toast)
    // 创建组件对象
    const toast = new toastConstructor()
    // 将组件对象手动挂载到DOM元素上
    toast.$mount(document.createElement('div'))
    // 将组件DOM添加至document
    document.body.appendChild(toast.$el)
    // 将组件对象添加至Vue原型上，则各组件都可调用这个组件里的属性和方法
    vue.prototype.$toast = toast
  }
}