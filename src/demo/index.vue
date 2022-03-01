<template>
<div class="demo-container">
    <button @click="handleClick" :disabled="isLoading">{{isLoading?"loading":"submit"}}</button>
    <p>{{error}}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            count:0,
            isLoading:false,
            error:"ajsflajlddjflja",
        }
    },
    methods:{
        handleClick(){
            //点击次数加一
            this.count++;
            this.isLoading=true;
            this.error = "";
            //错误消息清空
            //防止重复点击，需要先将isLoading设置为true
            //通知父组件：我被点击了，并传递当前的点击次数
            //等待父组件处理（有可能异步），将父组件处理的结果设置到error
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.demo-container{
    position: relative;
    height: 300px;
        button{
            .self-center()
        }
    
}
</style>