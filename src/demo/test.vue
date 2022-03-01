<template>
      <demo @click="handleClick"/>
</template>

<script>
import demo from "./index.vue";
export default {
    components:{
        demo,
    },
    methods:{
        handleClick(e,callback){
            console.log("父组件：",e)
            setTimeout(()=>{
            callback("密码填写错误")
            },3000)
        }
    }
}
</script>

<style>

</style>