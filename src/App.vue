<template>
<div class="app-container">
  <Layout>
    <template #left>
      <div class="siteAside">
        <SiteAside />
      </div>
    </template>
    <template>
      <RouterView />
    </template>
  </Layout>
  <ToTop />
</div>
</template>
<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";
import ToTop from "./components/ToTop";
import App from "@/tests/index.vue"
export default {
  components:{
    SiteAside,
    Layout,
    ToTop,
    App,
  }
}
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container{
  .self-fill(fixed);
  .siteAside{
    width: 250px;
    height: 100%;
  }
}
</style>