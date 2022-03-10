import Mock from "mockjs"
import "./banner.js"
import "./blog.js"
import "./setting.js"
import "./about.js"
//模拟网络延迟
Mock.setup({
    timeout: "1000-2000"
})