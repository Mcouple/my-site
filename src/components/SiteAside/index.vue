<template>
  <div class="site-aside-container">
    <Avatar :src="url"/>  
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import Contact from "./Contact"
import Menu from "./Menu"
export default {
    components:{
        Avatar,
        Menu,
        Contact
    },
    data(){
        return{
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhPD1DVvthdZWJ7SI5kpuedJS4TmAF3IC2A&usqp=CAU"
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container{
    width: 100%;
    height: 100%;
    background: @dark;
    box-sizing: border-box;
    overflow-y:auto ;
    padding-top: 100px;
    .avatar-container{
        margin: 0 auto;
    }
}
</style>