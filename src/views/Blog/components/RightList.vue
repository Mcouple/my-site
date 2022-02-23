<template>
  <ul>
      <li v-for="(item,i) in list" :key="i" :class="{
          active:item.isSelect
      }">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
    //属性
    props:{
        //传入属性 [{name:"xxx",isSelect:true, children:[{name:"yyy",isSelect:false}]}]
        list:{
            type:Array,
            //数组，对象的默认值，需要写成一个函数，返回值为数组/对象
            default:() => []
        }
    }
}
</script>

<style>

</style>