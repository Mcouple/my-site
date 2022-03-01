<template>
<div class="blog-detail-container">
    <h1>{{blog.title}}</h1>
    <div class="aside">
        <span>日期:{{formatDate(blog.createDate)}}</span>
        <span>浏览:{{blog.scanNumber}}</span>
        <span ><a href="#">评论{{blog.commentNumber}}</a> </span>
        <span ><a href="#">{{blog.category.name}}</a> </span>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body">
    </div>
</div>
</template>

<script>
import {formatDate} from "@/utils";  
import "@/styles/markdown.css";
//markdown 代码着色，highlight.js
import "highlight.js/styles/github.css"
export default {
    //有一个属性，显示的是文章内容
    props:{
        blog:{
            type:Object,
            required:true
        }
    },
    methods:{
        formatDate,
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside{
    font-size: 12px;
    color: @gray;
    span{
        margin-right: 15px;
    }
}
.markdown-body{
    margin-top: 2em;
}
</style>