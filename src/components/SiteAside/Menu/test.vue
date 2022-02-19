<template>
<dir class="test-container">
  <Menu/>
</dir>
</template>

<script>
import Menu from "./";
export default {
    components:{
        Menu
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
.test-container{
  width: 400px;
  height: 600px;
  border: 2px solid red;
  background-color: black;
  margin: 0 auto;
  padding: 0;
}
</style>