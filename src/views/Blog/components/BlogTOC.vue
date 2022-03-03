<template>
<div class="blog-toc-container">
    <h2>侧边栏</h2>
    <RightList :list="tocWithSelect" @select="handleSelect"/> 
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
            activeAnchor:"article-md-title-1",
        }
    },

    computed:{
        //****根据toc属性得到带有isSelect数组的toc数组,使用递归进行处理
        tocWithSelect(){
            const getTOC = (toc=[])=>{
                return toc.map(t=>({
                    ...t,
                    isSelect:t.anchor === this.activeAnchor,
                    children:getTOC(t.children),
                }))
            };
            return getTOC(this.toc)
        },
        //根据右侧toc目录，得到他们对应的h元素的id
        doms(){
            const doms = [];
            const addToDoms = toc=>{
                for (const t of toc){
                    doms.push(document.getElementById(t.anchor));
                    if(t.children && t.children.length){
                        addToDoms(t.children)
                    }
                }
            }
            addToDoms(this.toc)
            return doms;
        },
    },
    created(){
       window.setSelect =  this.setSelect;
    },
    methods:{
    //目录点击跳转
        handleSelect(item){
            location.hash = item.anchor
        },
        //设置activeAnchor为正确的值
        setSelect(){
            //由于后续要重新设置，先清空之前的状态
            this.activeAnchor = "";
            const range = 200;
            for (const dom of this.doms) {
                if(!dom){
                    //检查当前这个dom元素是不是应该被选中
                    continue;
                }
                //得到元素离视口顶部的距离
                const top = dom.getBoundingClientRect().top;
                if(top>=0 && top <= range){
                    //在规定范围nei
                    this.activeAnchor = dom.id;
                    return
                }else if(top > range){
                    //在规定范围下方
                    return
                }else{
                    //在规定范围上方
                    this.activeAnchor = dom.id;
                }
            }
        }
    },
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