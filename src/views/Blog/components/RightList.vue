<template>
  <ul class="right-list-container">
      <li v-for="(item,i) in list" :key="i" >
      <span @click="handleClick(item)" :class="{active:item.isSelect}">{{item.name}}</span>
      <span v-if="item.aside" @click="handleClick(item)" class="aside" :class="{active:item.isSelect}">{{item.aside}}</span>
      <!-- 显示当前组件  递归子属性-->
        <RightList :list="item.children" @select="handleClick"/>
      </li>
  </ul>
</template>

<script>
export default {
    //当组件名字缺失的时候，没有注册可以用name属性
    name:"RightList",
    //属性
    props:{
        //传入属性 [{name:"xxx",isSelect:true, children:[{name:"yyy",isSelect:false}]}]
        list:{
            type:Array,
            //数组，对象的默认值，需要写成一个函数，返回值为数组/对象
            default:() => []
        }
    },
    methods:{
        handleClick(item){
            //抛出事件
            if(!item.isSelect){
                this.$emit("select",item)  
            }

        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container{
    list-style: none;
    padding: 0;
    margin: 0;
    .right-list-container{
        margin-left:1rem ;
    }
    li{
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;
        cursor: pointer;
        .active{
            color: @warn;
            font-weight: bold;   
        }
     }
}
.aside{
    font-size: 12px;
    margin-left: 1em;
    color: @gray;
}
</style>