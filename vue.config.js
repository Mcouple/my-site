//vue-cli的配置文件
//因为运行在node环境所以，要用common.js导出
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://mcouple.github.io/Mcouple-website/",
            }
        }
    }
}