<template>
    <div class="message-area-container">
        <!-- 把子组件传出来的事件向上抛，如果不使用的话 -->
        <DataForm v-on="$listeners"/>
        <h3>
            {{title}}
            <span>{{subTitle}}</span>
        </h3>
        <DataList :list="list" />
        <div class="loading" ></div>
    </div>  
</template>

<script>
import DataForm from "@/components/MessageArea/DataForm";
import DataList from "@/components/MessageArea/DataList";
export default {
    props:{
        title:{
            type:String,
            default:"",
        },
        subTitle:{
            type:String,
            default:"",
        },
        list:{
            type:Array,
            default:()=>[],
        },
        isListLoading:{
            type:Boolean,
            default:false,
        },
    },
    components:{
        DataForm,
        DataList,
    },
}
</script>

<style scoped lang="less">
.loading{
    position:relative;
    height: 100px;
}
</style>