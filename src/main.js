//启动文件
import Vue from 'vue'
import App from './App.vue'
//引入全局样式表
import "./styles/global.less"

import router from "@/router/index.js"
// 开发阶段的一些提示，可以删除
// Vue.config.productionTip = false


//向实例注入成员
// Vue.prototype.$sayhello = function() {
//     alert("hello!!!!")
// }


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')