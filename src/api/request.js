import axios from "axios";
import showMessage from "../utils/showMessage";
const ins = axios.create(); //创建一个axios的实例，里面可以填配置对象，如果不填就全用
ins.interceptors.response.use(function(resp) {
    console.log("运行了拦截器")
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: "error"
        })
        return null
    }
    return resp.data.data
})
export default ins;