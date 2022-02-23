//公共的远程获取数据的代码

export default function(dafaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: dafaultDataValue
            }
        },
        async created() {
            this.data = await this.fetchData()
            this.isLoading = false
        }
    }
}