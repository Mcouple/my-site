import Vuex from "vue";
import Vue from "vue";

Vue.use(Vuex); //应用Vuex插件
const store = new Vuex.store({
    //仓库的配置
    state: {
        count: 0
    },
    //里面不可以写异步任务
    mutations: {
        increase(state) {
            state.count++
        },
        decrease(state) {
            state.count--
        },
        //payload:负荷，负载
        power(state, payload) {
            state.count **= payload
        }
    },
    //专门写异步任务
    actions: {
        asyncIncrease(ctx) {
            setTimeout(() => {
                ctx.commit("increase")
            }, 1000)
        },
        asyncDecrease(ctx) {
            setTimeout(() => {
                ctx.commit("decrease")
            }, 1000);
        },
        asyncPower(ctx, payload) {
            setTimeout(() => {
                ctx.commit("power", payload)
            }, 1000);
        }
    }
})
export default store;


// this.$store.commit("increase")  提交增加
// 异步，store.dispatch("asyncPower",3)