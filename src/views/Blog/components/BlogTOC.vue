<template>
<div class="blog-toc-container">
    <h2>侧边栏</h2>
    <RightList :list="toc" @select="handleSelect"/> 
</div>

</template>

<script>
import RightList from "./RightList.vue"
export default {    
    components:{
        RightList,
    },
    props:{
        toc:{
            type:Array,
        }
    },
    data(){
        return{
            acticveAnchor:"article-md-title-1"
        }
    },
    methods:{
        //目录点击跳转
        handleSelect(item){
            location.hash = item.anchor
        }
    },
    computed:{
        //根据toc属性得到带有isSelect数组的toc数组
        tocWithSelect(){

        }
    }
}
</script>

<style scoped lang="less">
.blog-toc-container{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  h2{
    font-weight: 2px;
    letter-spacing: bold;
    font-size: 1rem;
    margin: 0;
  }
}
</style>