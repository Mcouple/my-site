<template>
  <div class="Loading-container">
      <!-- <img src="@/assets/loading.gif" alt=""> -->
      <img :src="url">
  </div>
</template>

<script>
import loadingUrl from "@/assets/loading.gif";
export default {
    data(){
        return{
            url:loadingUrl
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.Loading-container{
    .self-center();
    img{
        width:80%;
    }
}
</style>