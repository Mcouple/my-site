//导入vue构造函数
import Vue from "vue"
//导入router插件
import VueRouter from "vue-router"
//导入路由匹配规则
import routes from "./routes"
Vue.use(VueRouter); //使用vue-router插件 vue-router其实是一个构造函数
const router = new VueRouter({
    //配置
    routes, //路由匹配规则
    mode: "history" //路由模式  hash  history 
})

//导出router 实例
export default router;