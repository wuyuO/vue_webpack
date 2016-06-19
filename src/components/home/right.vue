<style media="screen" lang="less" scoped>
  .m-right{border-radius: 2px;position: fixed;right:6px; top:14%; background-color:rgba(9, 9, 9,0.65); padding:10px 5px;color: #bdc5d2;}
  .m-right li{position: relative}
  .m-right li .msg-num{font-size: 11px;box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);color: #fff;background-color: #f22613;position: absolute;top: -2px;right: 2px;padding: 0 4px;border-radius: 4px;}
  .m-right li .msg-num-red{background-color: #f22613;}
  .m-right li .msg-num-blue{background-color: #5bc0de;}
  .m-right li .msg-num-yell{background-color: #f0ad4e;}
  .m-right li .msg-num-green{background-color: #5cb85c;}
  .m-right li:hover{ color: #fff;}
</style>
<template >
  <ul class="nav m-right text-center">
    <li>
      <span class="msg-num msg-num-red">13</span>
      <i class="fa fa-comments fa-2x" aria-hidden="true"></i>
      <p class="f-font11">待沟通</p>
    </li>
    <li>
      <span class="msg-num msg-num-blue">10</span>
      <i class="fa fa-flag fa-2x" aria-hidden="true"></i>
      <p class="f-font11">待沟通</p>
    </li>
    <li>
      <span class="msg-num msg-num-yell">3</span>
      <i class="fa fa-adjust fa-2x" aria-hidden="true"></i>
      <p class="f-font11">待沟通</p>
    </li>
    <li>
      <span class="msg-num msg-num-green">1</span>
      <i class="fa fa-gear fa-2x" aria-hidden="true"></i>
      <p class="f-font11">待沟通</p>
    </li>
    <li>
      <i class="fa fa-comments fa-2x" aria-hidden="true"></i>
      <p class="f-font11">待沟通</p>
    </li>
    <li>
      <span class="msg-num msg-num-yell">3</span>
      <i class="fa fa-flag fa-2x" aria-hidden="true"></i>
      <p class="f-font11">待沟通</p>
    </li>
    <li>
      <i class="fa fa-adjust fa-2x" aria-hidden="true"></i>
      <p class="f-font11">待沟通</p>
    </li>
    <li>
      <span class="msg-num msg-num-green">3</span>
      <i class="fa fa-gear fa-2x" aria-hidden="true"></i>
      <p class="f-font11">待沟通</p>
    </li>
  </ul>
</template>
<script>
  export default{

  }
</script>
