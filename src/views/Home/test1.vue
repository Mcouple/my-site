<template>
<div ref="container">
    <h1>home</h1>
  <button @click="handleClick">点击</button>
</div>

</template>

<script>
export default {
  methods:{
    handleClick(){
      this.$showMessage({
        content:"评论成功",
        type:"success",
        container : this.$refs.container,
        //回调函数
        callback:function(){
          alert('hello world')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>