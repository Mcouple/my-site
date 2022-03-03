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
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhPD1DVvthdZWJ7SI5kpuedJS4TmAF3IC2A&usqp=CAU"
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