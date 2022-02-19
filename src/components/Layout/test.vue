<template>
  <div class="test-container">
      <Layout>
          <template #left>
              <div class="left">
                左侧区域,宽度适应内容
              </div>
          </template>
          <template>
              <div class="main">
                中间------区域，占满剩余空间
              </div>
          </template>
          <template #right>
              <div class="right">
                右侧区域，宽度适应内容
              </div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from "./"
export default {
    components:{
        Layout
    }
}
</script>

<style lang="less" scoped>
.test-container{
    width: 1000px;
    height: 600px;
    border: 2px solid black;
    .left{
        width: 200px;
        height: 100%;
        background: lightblue;
    }
    .main{
        width: 100%;
        height: 100%;
        background: lightcoral;
    }
    .right{
        height: 100%;
        width: 200px;
        background: lawngreen;
    }
}
</style>