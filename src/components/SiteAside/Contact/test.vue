<template>
<div class="test-container">
    <Contact />
</div>
</template>

<script>
import Contact from "./index.vue";
import "@/styles/global.less";
export default {
    components:{
        Contact
    }
}

</script>

<style>
.test-container{
    width: 400px;
    height: 600px;
    border: 2px solid red;
    background-color: rgb(224, 222, 222);
    margin: 0 auto;
}
</style>
