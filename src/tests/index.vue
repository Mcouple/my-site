<template>
  <div class="container">
      <app />
      <App />
  </div>
</template>

<script>
import app from "./app1.vue";
import App from "./app2.vue"
export default {
    components:{
        app,
        App,
    }
}
</script>

<style>

</style>