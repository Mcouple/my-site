<template>
  <List :list="list" @select="handleSelect"/>
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
                {name:"b",isSelect:true,
                children:[{name:"b-1",isSelect:false},{name:"b-2",isSelect:false},{name:"b-3",isSelect:false,
                children:[{name:"b-3-1",isSelect:false},{name:"b-3-2",isSelect:false}]}]
                },
                {name:"c",isSelect:false},
                {name:"d",isSelect:false}
            ]
        }
    },
    methods:{
        handleSelect(item){
            // console.log(item)
        }
    }
}
</script>

<style>

</style>