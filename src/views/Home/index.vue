<template>
<div class="home-container" ref="container" @wheel="handleWheel">
  <ul class="carousel-contaienr" :style="{
    marginTop,
  }">
    <li v-for="item in banners" :key="item.id">
      <CarouselItem :carousel="item"/>
    </li>
  </ul>
  <div class="icon icon-up" v-show="index>0" @click="change(index-1)">
    <Icon class="Icon" type="arrowUp"/>
  </div>
  <div class="icon icon-down" v-show="index<banners.length - 1 " @click="change(index+1)">
    <Icon class="Icon" type="arrowDown"/>
  </div>
  <ul class="indicator">
    <li :class="{
      active:i===index
    }" v-for="(item,i) in banners" :key="item.id" @click="change(i)"></li>
  </ul>
  <Loading v-if="isLoading"/>
</div>
</template>

<script>
import {getBanners} from "@/api/banner.js";
import CarouselItem from "@/views/Home/Carouselitem.vue"
import Carouselitem from './Carouselitem.vue';
import Icon from "@/components/icon";
import Loading from "@/components/Loading";
export default {
  components:{
    CarouselItem,
    Icon,
    Loading,
  },
  data(){
    return {
      banners :[],
      index:0, //当前显示的是第几章轮播图
      containerHeight:0,  //整个容器的高度
      isLoading:true,
    }
  },
  async created(){
    this.banners = await getBanners()
    this.isLoading = false
  },
  //计算属性
  computed:{
    marginTop(){
      return  -this.index * this.containerHeight + "px"
    }
  },
  mounted(){
    //当dom元素挂载之后，得到容器的高度
    this.containerHeight = this.$refs.container.clientHeight;
    // 实时监听窗口变化情况
    window.addEventListener("resize",this.handleResize)
  },
  destroyed(){
    //移除resize事件函数
    window.removeEventListener("resize",this.handleResize)
  },
  methods:{
    change(i){
      this.index = i;
    },
    // 滚轮滚动函数
    handleWheel(e){
      if(e.deltaY>=86){
        this.index++;
        if(this.index>=this.banners.length){
          this.index = this.banners.length-1
        }
      }
      if(e.deltaY<=-86){
        this.index--;
        if(this.index <= 0 ){
          this.index = 0
        }
      }
    },
    //窗口实时获取函数
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    }
  }
}
</script>

<style lang="less" scoped>
@import  "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container{
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
  overflow: hidden;
  .indicator{
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background:@words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      // 激活状态下，背景颜色变为白色
      &.active{
        background:#fff;
      }
    } 
  }
  .carousel-contaienr{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: 2s;

    li{
    width: 100%;
    height: 100%;
    position: relative;
    }
  }
  .icon{
    @gap:35px;
    .self-center();
    &.icon-up{
      top:@gap;
      animation: jump-up 2s linear infinite;
    }
    &.icon-down{
      top:auto;
      bottom:@gap;
      animation: jump-down 2s linear infinite;
    }
    .icon-container{
      font-size: 30px;
      color: @gray;
      cursor: pointer;
    }
    @keyframes jump-up{
      0%{
        transform:translateY(0px)
      }
      50%{
        transform: translateY(-15px);
      }
      100%{
        transform: translateY(0px);
      }
    }
    @keyframes jump-down{
      0%{
        transform: translateY(-15px);
      }
      50%{
        transform: translateY(0px);
      }
      100%{
        transform: translateY(-15px);
      }
    }
}
}
</style>


