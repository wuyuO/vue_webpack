<style media="screen" lang="less" scoped>
  .g-wrap{margin-top: 50px}
  .g-wrap .cnt{width: 100%; padding-left: 220px;color: #676767;}
</style>
<template >
      <top></top>
      <div class="g-wrap">
        <left></left>
        <div class="cnt">
          <router-view></router-view>
        </div>
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
