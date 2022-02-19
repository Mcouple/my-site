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
            url:"https://tse1-mm.cn.bing.net/th/id/R-C.fe5120d6ef6f7e57acedb1435d7cb00e?rik=sHtKftTxaF0lkQ&riu=http%3a%2f%2fimg.ewebweb.com%2fuploads%2f20191231%2f11%2f1577761365-bpjNduFZKa.jpg&ehk=AMhr89KDcHw1AcCfyF1hVGGhmiwPzLP%2fEMzMpKJwlUM%3d&risl=&pid=ImgRaw&r=0"
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