<template>
<div class="empty-container">
    <icon class="empty-icon" type="empty"/>
    <p class="empty-text">{{text}}</p>
</div>
</template>

<script>
import icon from "../icon/"
export default {
    //注册组件
    components:{
        icon
    },
    props:{
        text:{
            type:String,
            default:"无数据"
        }
    },
    
}
</script>

<style lang="less" scoped>
//导入混合样式less文件 
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container{
    .self-center( );
    color: @gray;
    text-align: center;
}
//icon组件的类名就是icon-container  所以可以直接设置
.icon-container{
    font-size: 72px;
}

</style>