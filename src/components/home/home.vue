<style media="screen" lang="less" scoped>
  .g-wrap{margin-top: 50px}
</style>
<template >
      <top></top>
      <div class="g-wrap">
        <left></left>
        <router-view></router-view>
        <right></right>
      </div>
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
