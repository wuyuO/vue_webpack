<style media="screen" lang="less" scoped>
  .m-nav_menu{background-color: #233646;width: 220px;position: fixed; top:50px;z-index: 10001;height: 100%}
  .m-nav_menu a{text-decoration: none;width:100%;display: inline-block;color: #a7b1c2;}
  .m-nav_menu > li{color: #a7b1c2;font-size:12px;font-weight: 600}
  .m-nav_menu > li.active{border-left:3px solid #18bc9c;background-color: #293846;}
  .m-nav_menu > li.active .first{color: #fff;}
  .m-nav_menu > li .first{padding:10px 15px 10px 25px;}
  .m-nav_menu > li:not(:first-child):hover{border-left:3px solid #18bc9c;}
  .m-nav_menu > li a > .first:hover{color: #fff;background-color: #293846;}
  .m-nav_menu > li:first-child{padding:0;font-weight: 100;}
  .m-nav_menu >li a:hover{background-color: #293846;}
  .m-user{background-color: #303641;padding:15px; color:#fff}
  .m-user .left{width: 70px;position: absolute;}
  .m-user .right{width: 100%;padding-left: 80px;}
  .m-user img{width: 65px; height:65px;background-color:#303641;border:4px solid #aaa;}

  /*--child menu --*/
  .m-nav_menu .child_menu >li a{padding: 8px 8px 8px 48px; }
  li.active .child_menu >li a:hover,li.active .child_menu >li.active a{color: #fff;}
</style>
<template >
  <ul class=" m-nav_menu">
    <li class="nav-header">
      <div class="m-user f-posrel">
        <div class="left">
          <img  src="../../asset/img/login.jpg" alt="..." class="img-circle ">
        </div>
        <div class="right">
          <div>Welcome</div>
          <h4>user name</h4>
          <div class="text-left">
            <span class="label label-info">管理员</span>
          </div>
        </div>
      </div>
    </li>
    <!-- start for -->
    <template v-for="(key, item) in menu">
      <li :class="{'active':key == title}">
        <a v-link="{ path:item.url }">
          <div v-on:click="select_menu(key)" class="first">
            <i class="fa {{item.icon}}  f-mgright15 " aria-hidden="true"></i>{{key}}
            <span v-if="item.new" class="label label-success f-mgleft15">new</span>
            <i v-if="item.hasOwnProperty('child_menu')" class="fa fa-chevron-down pull-right " :class="{'f-rotate90':!item.status}" aria-hidden="true"></i>
          </div>
        </a>
        <ul v-if="key == title" class="child_menu">
          <template v-for="(index, el) in item.child_menu">
            <li v-on:click="child_active(index)" :class="{'active':index == child_index}">
              <a v-link="{ path:el.url }">{{el.name}} <span v-if="el.new" class="label label-warning pull-right">new</span></a>
            </li>
          </template>
        </ul>
      </li>
    </template>
    <!-- end for -->
  </ul>
</template>
<script>
  import {MENU} from '../../asset/json/menu.js'
  export default{
    data:function(){
      return {
        menu:MENU,
        title:"后台管理",
        child_index:0
      }
    },
    methods:{
      select_menu:function(key,event){
        this.title = key;
        this.child_index = 0;
      },
      child_active:function(index){
        this.child_index = index
      }
    }
  }
</script>
