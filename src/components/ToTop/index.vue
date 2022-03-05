<template>
    <div @click="handleClick" v-show="show" class="toTop-container">
        Top
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
        }
    },
    created(){
        this.$bus.$on("mainScroll",this.handleScroll)
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.handleScroll)
    },
    methods:{
        handleScroll(dom){
            if(!dom){
                this.show = false;
                return
            }
            this.show = dom.scrollTop>=200
        },
        handleClick(){
            //点击的时候回到顶部
            //注册事件
            this.$bus.$emit("setMainScroll",0)
    }
    }
}
</script>

<style lang="less" scoped>
.toTop-container{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(26, 199, 26);
    position: fixed;
    bottom: 125px;
    right: 125px;
    z-index: 99999;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    color: white;
}
</style>