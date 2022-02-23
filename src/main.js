//启动文件
import Vue from 'vue'
import App from './App.vue'
//引入全局样式表
import "./styles/global.less"
import "@/mock/index.js"
import router from "@/router/index.js"
// 开发阶段的一些提示，可以删除
// Vue.config.productionTip = false

//向实例注入成员,这样每个vue实例（组件）都可以使用了，不用每个组件都导入一遍了
import showMessage from "@/utils/index.js";
import "@/api/banner.js"

//注册全局指令
import vLoading from "@/directives/loading.js";
Vue.directive("loading", vLoading)



Vue.prototype.$showMessage = showMessage
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')