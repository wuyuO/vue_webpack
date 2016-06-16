<style media="screen" lang="less" scoped>
  .top_brand{background-color: #1f232a; color: #fff;width: 260px; text-align:center}
  .top_brand:focus,.top_brand:hover{background-color: #232a37; color: #fff;}
  .top_nav{background-color: #18bc9c}
  .top_nav .top_nav_icon{ line-height: 50px; color: #fcfcfc;}
  .top_nav .top_nav_icon>li{width: 75px;text-align: center;position:relative}
  .top_nav .top_nav_icon .user{width: 175px; text-align: left;}
  .top_nav .top_nav_icon li i{font-size: 1.4em}
  .top_nav .top_nav_icon .msg{padding: 2px 6px; border-radius: 4px;color: #fff;font-size: 12px;position: relative;top: -13px;left: -13px;box-shadow: 0 2px 0 rgba(0,0,0,.2) }
  .top_nav .top_nav_icon .msg-red{ background-color: #f22613}
  .top_nav .top_nav_icon .msg-blue{ background-color: #3498db}
  .top_nav .top_nav_icon .msg-yell{ background-color: #f9bf3b}
  .top_nav .top_nav_icon .img{ width: 40px;height: 40px;background-color: rgb(221, 222, 224); border: 1px solid #ccc;padding:1px;}
  .top_nav .top_nav_icon .user-menu{top:105%; width: 175px;right:3px; }
</style>
<template >
  <nav class="navbar navbar-default navbar-fixed-top top_nav">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand top_brand" href="#"><span>WEBSITE</span>&nbsp;<span>Admin</span></a>
      </div>
      <ul class="nav navbar-nav navbar-right top_nav_icon">
        <li class="f-text-sh"><i class="fa fa-bell " aria-hidden="true"></i>
          <span class="msg msg-red">7</span>
        </li>
        <li class="f-text-sh"><i class="fa fa-comment " aria-hidden="true"></i>
          <span class="msg msg-blue">2</span>
        </li>
        <li class="f-text-sh"><i class="fa fa-exclamation-triangle " aria-hidden="true"></i>
          <span class="msg msg-yell">3</span>
        </li>
        <li class="user" v-on:click="toggle_menu">
          <span class="f-text-sh">The User name</span>
          <img  src="../../asset/img/login.jpg" alt="..." class="img-circle img-thumbnail img">
          <i class="fa fa-sort-desc fa-lg" aria-hidden="true"></i>
          <ul class="dropdown-menu user-menu" >
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li><a href="#">login out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default{
    methods:{
      toggle_menu:function(event){
        $('.user-menu').toggle();
        //$(event.target).children('i').toggleClass('fa-sort-desc').toggleClass('fa-sort-up');
      }
    }
  }
</script>
