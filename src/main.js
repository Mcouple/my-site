//启动文件
import Vue from 'vue'
import App from './App.vue'
//引入全局样式表
import "./styles/global.less"
import "./mock/index.js"
import router from "@/router/index.js";
import "./eventBus"
// 开发阶段的一些提示，可以删除
// Vue.config.productionTip = false
import "@/api/banner.js";

//引入仓库
import store from "@/store"
store.dispatch("setting/fetchSetting")
    //向实例注入成员,这样每个vue实例（组件）都可以使用了，不用每个组件都导入一遍了
import { showMessage } from "@/utils/index.js";
Vue.prototype.$showMessage = showMessage;

//注册全局指令
import vLoading from "@/directives/loading.js";
import vLazy from "@/directives/lazy.js";
Vue.directive("loading", vLoading)
Vue.directive("lazy", vLazy)


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')



//随便测试一下
// import * as getSetting from "./api/setting.js";
// getSetting.getSetting().then(resp => {
//     console.log(resp)
// })