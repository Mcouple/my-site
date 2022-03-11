<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea 
    title="留言板"
    :subTitle="`(${data.total})`"
    :isListLoading="isLoading"
    :list="data.rows"
    @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
//远程获取数据，例如loading，没有在store仓库里面，就用混合做，
import fetchData from "@/mixins/fetchData.js";
import * as msgApi from "@/api/message.js";
//滚动条top
import mainScroll from "@/mixins/mainScroll.js"
export default {
  components:{
    MessageArea,
  },
  data(){
    return{
      page:1,
      limit:10
    }
  },
  mixins:[fetchData({total:0,row:[]}),mainScroll("messageContainer")],
  //组件创建时监听滚动条事件
  created(){
    this.$bus.$on("mainScroll",this.handleScroll);
  },
  //组件销毁时，取消监听
  destroyed(){
    this.$bus.$off("mainScroll",this.handleScroll)
  },
  computed:{
    //判断有没有更多的评论
    hasMore(){
        return this.data.rows.length < this.data.total
    },
  },
  methods:{
    async fetchData(){
       return msgApi.getMessage(this.page,this.limit)
    },
    async handleSubmit(data,callback){
      const resp =  await msgApi.postMessage(data);
      callback("感谢您的留言");
    //把留言添加到留言板
      ++this.data.total
      this.data.rows.unshift(resp)
    },
    //滚动条事件
    handleScroll(dom){
        if(this.isLoading || !dom){
            //目前正在加载更多
            return
        };
        const range = 50; //顶一个可接受的范围，在这个范围内都算达到了底部
        const dec = Math.abs((dom.scrollTop+dom.clientHeight)-dom.scrollHeight);
        if(dec<=range){
          //如果在一个合理的范围内，就加载更多留言
          this.fetchMore()
        }
    },
    //加载下一页评论
    async fetchMore(){
      if(!this.hasMore){
          //没有更多数据了
          return
      };
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
  }
}
</script>

<style scoped lang="less">
  .message-container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 25px 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    .message-area-container{
      width: 700px;
      margin: 0 auto;
    }
  }
</style>