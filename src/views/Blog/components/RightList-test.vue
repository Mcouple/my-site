<template>
  <List :list="list"/>
</template>

<script>
import List from "./RightList.vue"
export default {
    components:{
        List
    },
    data(){
        return{
            list : [
                {name:"a",isSelect:false},
                {name:"b",isSelect:true},
                {name:"c",isSelect:false},
                {name:"d",isSelect:false}
            ]
        }
    }
}
</script>

<style>

</style>