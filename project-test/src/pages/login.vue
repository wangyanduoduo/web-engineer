<!--
 * @Author: wy
 * @Date: 2023-12-26 11:27:04
 * @LastEditors: wy
 * @LastEditTime: 2023-12-26 13:20:49
 * @FilePath: /笔记/web-engineer/project-test/src/pages/login.vue
 * @Description: 
-->
<template>
  <div class="login">
    <form action="#" method="post">
      <h1>
        <a href="index.html"><img src="img/temp/logo.png" /></a>
      </h1>
      <p></p>
      <div class="msg-warn hide">
        <b></b>公共场所不建议自动登录，以防账号丢失
      </div>
      <p>
        <input type="text" name="" value="" placeholder="昵称/邮箱/手机号" />
      </p>
      <p><input type="text" name="" value="" placeholder="密码" /></p>
      <p><input type="submit" name="" value="登  录" /></p>
      <p class="txt">
        <a class="" href="reg.html">免费注册</a
        ><a href="forget.html">忘记密码？</a>
      </p>
    </form>
  </div>
</template>

<script>
import '../css/public.css';
import '../css/login.css';

export default {};
</script>

<style scope></style>
