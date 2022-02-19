<template>
<div class="test-container">
    <SiteAside />
</div>
</template>

<script>
import SiteAside from "./"
// 导入全局样式
import "@/styles/global.less"
export default {
    components:{
        SiteAside
    }
}
</script>

<style lang="less" scoped>
.test-container{
    width: 300px;
    height: 600px;
    border: 2px solid black;
    margin: 0 auto;
}
</style>