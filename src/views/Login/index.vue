<template>
  <div>
    <div class="login">
      <div class="login-url">
        <div class="loginform">
          <ul>
            <li><router-link to="/login/b">扫码登录</router-link></li>
            <li><router-link to="/login/a">账户登录</router-link></li>
          </ul>
          <router-view></router-view>
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
.login {
  height: 487px;
  background-color: #e93854;
}
.login-url {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url("下载.png") no-repeat;
}
.loginform {
  width: 420px;
  height: 406px;
  background-color: #fff;
  padding: 20px;
  float: right;
  text-align: center;
  box-sizing: border-box;
  margin: 45px;
}
.loginform ul {
  display: flex;
  justify-content: flex-end;
  width: 380px;
}
.loginform ul li {
  width: 50%;
}
.loginform ul li a {
  font-size: 20px;
  border: 1px solid #ddd;
  display: block;
  height: 50px;
  line-height: 50px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
}
.loginform ul li:nth-child(1):active a {
  border-bottom: none;
  color:red
}
.loginform ul li:nth-child(2):active a {
  border-bottom: none;
  color: red;
}

</style>