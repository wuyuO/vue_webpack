<template >
  <div >
    	<!-- <login></login> -->
      <router-view></router-view>
  </div>
</template>
<script>
  import login from "./login/login.vue"
  export default{
    components:{
      login
    }
  }
</script>
