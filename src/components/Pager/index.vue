<template>
<!-- 只有在总页数大于1时才显示  -->
  <div class="pager-container" v-if="pageNumber > 1">
      <a @click="handleClick(1)" :class="{disabled:current === 1}">|&lt;&lt;</a>
      <!-- @click="handleClick($event , )" 这样可以传递多个参数  上面的那种写法只有一个参数传递-->
      <a @click="handleClick(current-1)" :class="{disabled:current === 1}">&lt;&lt;</a>
      <a @click="handleClick(n)" v-for="(n,i) in numbers" :key="i" :class="{active:n === current}">{{n}}</a>
      <a @click="handleClick(current+1)" :class="{disabled:current === pageNumber}">&gt;&gt;</a>
      <a @click="handleClick(pageNumber)"  :class="{disabled:current === pageNumber}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props:{
        //当前页码
        current:{
            type:Number,
            default:1
        },
        //总数据量
        total:{
            type:Number,
            default:0
        },
        //页容量
        limit:{
            type:Number,
            default:10
        },
        //可见页码数
        visibleNumber:{
            type:Number,
            default:10
        }
    },
    computed:{
        //总页数
        pageNumber(){
        // 用总数据量除以每页的数据量就是总页数
          return Math.ceil(this.total / this.limit) 
        },
        numbers(){
            let nums = [];
            for(let i = this.visibleMin;i<=this.visibleMax;i++){
                nums.push(i)
            }
            return nums
        },
        //得到显示的最小数字
        visibleMin(){
            let min = this.current- Math.floor(this.visibleNumber/2)
            if(min<1){
                min=1
            }
            return min
        },
        //得到最大的数字
        visibleMax(){
            let max = this.visibleMin + this.visibleNumber - 1
            if(max>this.pageNumber){
                max=this.pageNumber
            }
            return max
        }
    },
    methods: {
        handleClick(newPage){
            if(newPage <1){
                newPage=1
            }
            if(newPage>this.pageNumber){
                newPage=this.pageNumber
            }
            if(newPage===this.current){
                return
            }
            //抛出一个事件  切换事件
            this.$emit("pageChange",newPage)
        }
    },
}
</script>

<style lang="less" scoped>
//~@退回到src目录
@import "~@/styles/var.less";
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @primary;
        margin: 0 5px;
        cursor: pointer;
        &.disabled{
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active{
            color: @words;
            font-weight: bold;
            cursor:none;
        }
    }
}
</style>