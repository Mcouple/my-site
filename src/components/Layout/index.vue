<template>
  <div class="layout-container">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="main">
          <slot></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-container{
    height: 100%;
    width: 100%;
    display: flex;
    .left,.right{
        // 表示不可压缩
        flex: 0 0 auto;
        overflow: hidden;
    }
    .main{
        flex:1 1 auto;
    }
}
</style>