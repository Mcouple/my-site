<template>
<div class="carousel-item-container" @mousemove="showMouse" ref="carouselContainer">
    <div class="carousel-img">
        <!-- 图片组件，当图片加载完成才加载文字 -->
        <ImageLoader @load="this.showWords" :src="carousel.bigImg" :placeholder="carousel.midImg"/>
    </div>
    <div class="title" ref="title">
        {{carousel.title}}
    </div>
    <div class="desc" ref="desc">
        {{carousel.description}}
    </div>
</div>

</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
    components:{
        ImageLoader
    },
    //因为img组件不知道src地址是什么，需要使用的父组件进行传送，所以使用props属性
    props:["carousel"],
    data(){
        return{
            titleWidth:0,
            descWidth:0
        }
    },
    //声明周期函数
    mounted(){
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
        this.showMouse();
    },
    methods:{
        //调用该方法显示文字
        showWords(){
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            //强制让浏览器渲染一次
            this.$refs.title.clientWidth  //reflow
            this.$refs.title.style.transition = "1s"
            this.$refs.title.style.width = this.titleWidth + "px"

            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            //强制让浏览器渲染一次
            this.$refs.desc.clientWidth  //reflow
            //描述晚于标题一秒显示
            this.$refs.desc.style.transition = "2s 0.5s"
            this.$refs.desc.style.width = this.descWidth + "px"
        },
        showMouse(){
            console.log(this.$refs.carouselContainer.left)
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container{
    width: 100%;
    height: 100%;
    .carousel-img{
        width: 110%;
        height: 110%;
        position: absolute;
        z-index: -1;
    }
    .title,.desc{
        position: absolute;
        letter-spacing: 3px;
        left: 30px;
        color: #fff;
        //文字描边
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5),-1px 0 0 rgba(0, 0, 0, 0.5),
        0 1px 0 rgba(0, 0, 0, 0.5),0 -1px 0 rgba(0, 0, 0, 0.5) ;
        //设置这两个属性是为了，让文字宽度从0到auto,做一个动画，如果不设置这两个属性，就会换行，竖向排列
        white-space: nowrap;
        overflow: hidden;
        opacity: 0;
    }
    .title{
        top: calc(50% - 40px);
        font-size: 2em;
    }
    .desc{
        top: calc(50% + 20px);
        font-size: 1.2em;
        color: lighten(@gray,20%);
    }
}
</style>