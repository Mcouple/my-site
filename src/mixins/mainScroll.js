//滚动条滚动事件
export default function(refValue) {
    return {
        mounted() {
            //监听top滚动条滚动到顶部
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroy() {
            //dom元素销毁之后，从新告诉一遍没有dom元素了
            this.$bus.$emit("mainscroll")
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll)
        },
        methods: {
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            },
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue])
            }
        },
    }

}