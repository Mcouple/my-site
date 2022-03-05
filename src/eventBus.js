/*
 *事件名:mainScroll
 *含义：主区域滚动条位置变化后触发
 *参数：
 *-滚动的dom元素，如果是undefined，则表示dom元素已经不存在了
 *
 * 
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * -滚动高度
 * 
 */


import Vue from "vue";
const app = new Vue({});
//向实例注入成员,这样每个vue实例（组件）都可以使用了，不用每个组件都导入一遍了
Vue.prototype.$bus = app;
export default app;
// 这就是vue自带的事件总线,其实new Vue就是一个事件总线







// 手写事件总线
// const listeners = {};
// export default {
//     //监听某一个事件
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler)
//     },
//     //取消监听
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return
//         }
//         listeners[eventName].delete(handler)
//     },
//     //触发事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args)
//         }
//     }
// }


// 事件总线测试代码
// import eventBus from "./eventBus";
// function handler1(data) {
//     console.log("handler1", data)
// }

// function handler2(data) {
//     console.log("handler2", data)
// }

// eventBus.$on("1", handler1);
// eventBus.$on("1", handler2);
// eventBus.$on("2", handler1);
// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;