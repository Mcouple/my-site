<template>
<div class="carousel-item-container" @mousemove="handleMouseMove" ref="containerSize">
    <div class="carousel-img" :style="imagePosition" ref="innerSize">
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
            descWidth:0,
            containerSize:null, //外部容器的尺寸
            innerSize:null,      //内层容器的尺寸
            mouseX:0,           // 鼠标横坐标
            mouseY:0            // 鼠标纵坐标
        }
    },
    //计算属性
    computed:{
        //绑定到元素的style里面去,得到图片坐标
        imagePosition(){
            //这里需要设置一个判断，看容器尺寸有没有值
            if(!this.innerSize || !this.containerSize){
                return
            }
            const extraWidth = this.innerSize.width - this.containerSize.width; //内部图片多出的宽度
            const extraHeight = this.innerSize.height - this.containerSize.height //内部图片多出的高度
            const left = -extraWidth / this.containerSize.width * this.mouseX;
            const top = -extraHeight / this.containerSize.height * this.mouseY
            return{
                left:left+"px",
                top:top+"px",
            }
        },
        //鼠标中心位置
        center(){
            return{
                x : this.containerSize.width / 2,
                y : this.containerSize.height / 2,
            }
        }
    },
    //声明周期函数
    mounted(){
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
        this.setSize()
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        //注册一个resize事件，当窗口变化重新计算容器尺寸
        window.addEventListener("resize",this.setSize)

        
    },
    //当组件销毁之前，把方法也销毁
    destroyed(){
        window.removeEventListener("resize",this.setSize)
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
        handleMouseMove(e){
            //拿到元素的位置属性
            const rect = this.$refs.containerSize.getBoundingClientRect()
            this.mouseX = e.clientX - rect.left; 
            this.mouseY = e.clientY - rect.top;
        },
        setSize(){
            //外层容器的宽高
            this.containerSize = {
                width:this.$refs.containerSize.clientWidth,
                height:this.$refs.containerSize.clientHeight
            }
            //内层容器的宽高
            this.innerSize = {
                width:this.$refs.innerSize.clientWidth,
                height:this.$refs.innerSize.clientHeight
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .carousel-img{
        width: 110%;
        height: 110%;
        position: absolute;
        // transition: 1s;
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