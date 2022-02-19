<template>
    <div class="image-loader-container">
        <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="">
        <!-- 这里的load事件是元素自身所带的事件 -->
        <img @load="handleLoad" :src="src" :style="{opacity:originOpacity,transition:`${duration}ms`}" alt="">
    </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            default:500
        }
    },
    data(){
        return{
            originLoaded:false,  // 原图是否加载完成
            everythingDone:false // 原图有动画，所以展位图应该等原图动画加载完毕才消失
        }
    },
    computed:{
        originOpacity(){
            return this.originLoaded ? 1 : 0; 
        }
    },
    methods: {
        handleLoad(){
        this.originLoaded = true
            setTimeout(()=>{
                this.everythingDone = true;
                //注册一个load事件
                this.$emit("load")
            },this.duration)
        }
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container{
    width: 100%;
    height: 100%;
    position: relative;
    img{
        .self-fill();
        //防止图片拉伸
        object-fit: cover;
    }
    .placeholder{
        //让占位图片进行模糊处理
        filter: blur(2vw);
    }
}
</style>