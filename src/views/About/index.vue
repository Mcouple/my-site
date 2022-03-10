<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe v-if="src" 
    class="about-content"  
    :src="src" 
    frameborder="0"
    @load="srcLoaded=true"
    ></iframe>
  </div>
</template>

<script>
import {mapState} from "vuex";
//用mapState得到仓库的数据
export default {
  data(){
    return{
      //不能只看ajax是否加载完成，还要判断网页是否加载完成
      srcLoaded:false,
    }
  },
  computed:mapState("about",{
    src:"data",
    loading:"loading"
  }),
  created(){
    //触发仓库事件
    this.$store.dispatch("about/fetchAbout")
  }
}
</script>

<style scoped lang="less">
.about-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .about-content{
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>