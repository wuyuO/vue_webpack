<style media="screen" lang="less" scoped>

</style>
<template >
    <top></top>
    <left></left>
    <router-view></router-view>
    <right></right>
</template>
<script>
  import top from "./top.vue"
  import left from "./left.vue"
  import right from "./right.vue"
  export default{
    components:{
      top,left,right
    }
  }
</script>
