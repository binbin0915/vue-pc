<template>
  <div>
    <div class="login">
      <div class="login-url">
        <div class="loginform">
          <ul>
            <li><a href="###">扫描登录</a></li>
            <li><a href="###">账户登录</a></li>
          </ul>
          <div>
            用户名<input type="text">
            密码<input type="password">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="less" scoped>
.login{
  height: 487px;
  background-color:#e93854;
}
.login-url{
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background:url("下载.png") no-repeat;
}
.loginform{
  width: 420px;
  height: 406px;
  background-color:#fff;
  padding: 20px;
  float:right;
  text-align: center;
  box-sizing: border-box;
  margin:45px
}
.loginform ul{
  display:flex;
  justify-content: space-around;
}
.loginform a{
  font-size:20px
}
</style>