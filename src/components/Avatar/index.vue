<template>
    <!-- bind 缩写为 : 里面写js代码 -->
  <img class="avatar-container" :src="url" :style="{
      width:size+'px',
      height:size+'px'
  }"/>
</template>

<script>
export default {
    props:{
        url:{
            type:String, //url属性必须是一个字符串
            // required:true//属性必须传
            default:"https://tse1-mm.cn.bing.net/th/id/R-C.fe5120d6ef6f7e57acedb1435d7cb00e?rik=sHtKftTxaF0lkQ&riu=http%3a%2f%2fimg.ewebweb.com%2fuploads%2f20191231%2f11%2f1577761365-bpjNduFZKa.jpg&ehk=AMhr89KDcHw1AcCfyF1hVGGhmiwPzLP%2fEMzMpKJwlUM%3d&risl=&pid=ImgRaw&r=0"
        },
        size:{
            type:Number,
            default:150  //默认值，没有填就是150
        },
    }
}
</script>

<style scoped>
/* 加上scoped相当于是带有作用域的样式 */
.avatar-container{
    border-radius:50% ;
    /* 防止图片拉伸 */
    object-fit: cover;
    display: block;
}
</style>