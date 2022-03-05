<template>
  <Layout>
      <div ref="mainContainer" class="main-container" v-loading="isLoading">
          <BlogDetail :blog="data"  v-if="data"/>
          <BlogComment v-if="!isLoading"/>
      </div>
    <template #right>
        <div class="right-container" v-loading="isLoading">
            <BlogToc :toc="data.toc" v-if="data"/>
        </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogToc from "./components/BlogTOC";
import BlogComment from "./components/BlogComment.vue";
import mainScroll from "@/mixins/mainScroll.js";
export default {
    components:{
        Layout,
        BlogDetail,
        BlogToc,
        BlogComment,
    },
    mixins:[fetchData(null),mainScroll("mainContainer")],
    methods:{
        async fetchData(){
            return await getBlog(this.$route.params.id)
        },
    },
    //当界面更新之后,仍然跳转到之前的目录激活位置
    updated(){
        const hash = location.hash;
        location.hash = "";
        setTimeout(()=>{
            location.hash = hash;
        },50)
    },
}
</script>

<style scoped lang="less">
.main-container{
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    width: 100%;
    overflow-x:hidden ;
    li{
        list-style: square;
    }
}
.right-container{
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    box-sizing: border-box;
    position: relative;
}
</style> 