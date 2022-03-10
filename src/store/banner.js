import { getBanners } from "@/api/banner";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: [],
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchBanner(ctx) {
            //判断data里面有没有值，如果有就不用重新加载数据了
            if (ctx.state.data.length) {
                return
            }
            ctx.commit("setLoading", true);
            const resp = await getBanners();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false)
        }
    }
}