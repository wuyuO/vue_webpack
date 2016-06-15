<template >
   <div class="m-login">
     <a class="tt" href="##"><span>WEBSITE</span>&nbsp;<span>Admin</span></a>
     <div class="box">
       <div class="cnt">
         <h6>登录</h6>
         <div class="f-posrel">
           <i class="fa fa-user fa-2x" aria-hidden="true"></i>
           <input class="form-control" type="text" placeholder="个人账号">
         </div>
         <div class="f-posrel">
           <i class="fa fa-lock fa-2x" aria-hidden="true"></i>
           <input class="form-control f-mgtop20" type="password" placeholder="密码">
         </div>
       </div><!--end of cnt -->
     </div>
   </div>
</template>
<script>
  export default{

  }
</script>
<style lang='less'>
   html{
     height: 100%;
     background: url(../../asset/img/login.jpg) no-repeat top left;
     background-size: cover;
   }
   .f-mgtop20{margin-top: 20px}
   .f-posrel{position: relative}
   .m-login{
      position: absolute;
      top: 90px;
      left: 0;
      right: 0;
      text-align: center;
      .tt{
        color: #fff;
        font-size: 25px;
        font-weight: bold;
        letter-spacing: 1px;
        display: inline-block;
        margin-bottom: 20px
      }
      .box{
        margin: 0 auto;
        width: 400px;
        padding: 35px 0;
        box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.65);
        border-radius: 5px;
        .cnt{
          width: 82%;
          margin: 0 auto;
        }
        h6{
          text-transform: uppercase;
          margin: 0 0 30px 0;
          font-size: 18px;
          font-weight: 600;
        }
        i{
          color: #a9a9a9;
          position: absolute;
          right: 10px;
          top:8px
        }
      }
   }
</style>
