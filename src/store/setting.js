import { getSetting } from "@/api/setting";
import { titleController } from "../utils"
//全局网站设置
export default {
    namespaced: true,
    state: {
        loading: true,
        data: null,
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
        async fetchSetting(ctx) {
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
            if (resp.favicon) {
                //<link rel="shortcut icon" type="images/x-icon" href="./favicon..cion">
                let link = document.querySelector("link[rel='shortcut icon']");
                if (link) {
                    return
                };
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link)
            }
            if (resp.siteTitle) {
                // console.log(resp)
                titleController.setSiteTitle(resp.siteTitle)
            }
        }
    }
}