//模拟关于我页面的数据
import Mock from "mockjs";
Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    data: "https://www.strml.net/"
})