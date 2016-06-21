<style lang='less' scoped>
   img{height: 100%;width: 100%;background-size: cover;}
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
          .remember{
            text-align: left;
            margin-top: 20px;
            font-size: 13px;
          }
          label{
            font-weight: bold;
            color:#4a576a;
          }
        }
        h6{
          text-transform: uppercase;
          margin: 0 0 30px 0;
          font-size: 18px;
          font-weight: 600;
        }
        i{
          color: #dadada;
          position: absolute;
          right: 10px;
          top:4px
        }
      }
      div.alert{padding: 6px;margin-bottom: 10px;}
   }
</style>
<template >
   <div class="">
       <img src="../../asset/img/login.jpg" alt="登录背景" />
       <div class="m-login">
         <a class="tt" href="##"><span>WEBSITE</span>&nbsp;<span>Admin</span></a>
         <div class="box">
           <div class="cnt">
             <h6>登录</h6>
             <validator name="validation">
               <form role="form" novalidate>
                   <div class="f-posrel ">
                     <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                     <input  v-validate:username="['required']" class="form-control" type="text" placeholder="个人账号">
                   </div>
                   <div class="f-posrel">
                     <i class="fa fa-lock fa-2x" aria-hidden="true"></i>
                     <input  v-validate:password="{minlength:6,required:true}" class="form-control f-mgtop20" type="password" placeholder="密码">
                   </div>
                   <div class="remember ">
                     <label class="checkbox-inline">
                         <input class="f-top_3" type="checkbox" id="inlineCheckbox3" value="option3"> 记住我
                      </label>
                   </div>
                   <div class="errors">
                      <div v-if="$validation.username.required & $validation.password.dirty" class="alert alert-danger" role="alert">请输入您的账号!</div>
                      <div v-if="$validation.password.required & $validation.password.dirty " class="alert alert-danger" role="alert">请输入您的密码!</div>
                      <!-- <div v-if="$validation.password.minlength & $validation.password.dirty " class="alert alert-danger" role="alert">请输入不少于6位的密码!</div> -->
                      <!-- <p v-if="$validation.password.minlength & $validation.password.dirty ">Your password is too short.</p> -->
                      <!-- <p v-if="$validation.password.required & $validation.password.dirty ">Required your password.</p> -->
                    </div>
                    <!-- <pre>{{ $validation | json }}</pre> -->
                   <div class="text-center f-mgtop20">
                     <input type="button" @click="login" class="btn btn-primary btn-block" value="登录" :disabled="$validation.invalid">
                     <!-- <input type="button" @click='onReset' class="btn btn-primary btn-block" value="重置" > -->
                   </div>
              </form>
            </validator>
         </div><!--end of cnt -->
       </div><!--end of box -->
       </div>
   </div>
</template>
<script>
  export default{
    methods: {
       onReset: function () {
         this.$resetValidation()
       },
       login: function(){
         router.go('/');
       }
     }
  }
</script>
