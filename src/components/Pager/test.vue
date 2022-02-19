<template>
<div>
  <h1>App组件</h1>
  <Pager :total="total" :current="current" :visibleNumber="visibleNumber" @pageChange="handlePageChange"/>
</div>
</template>
<script>
import Pager from"./"
export default {
  components:{
    Pager
  },
  data(){
    return {
      current:5,
      visibleNumber:10,
      total:3000
    }
  },
  methods: {
    handlePageChange(newPage){
      this.current = newPage
      console.log("加载当前页的数据")
    }
  },
}
</script>
<style scoped>

</style>