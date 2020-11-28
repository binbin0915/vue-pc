<template>
  <div>
    <div class="login">
      <div class="login-url">
        <div class="loginform">
          <ul>
            <li><a href="###">扫码登录</a></li>
            <li><a href="###">账户登录</a></li>
          </ul>
          <div class="login-content">
            <form action="xxxx">
              <div class="login-content-input">
                <i></i>
                <input type="text" placeholder="手机号" v-model="msg" />
              </div>
              <div class="login-content-input">
                <i></i>
                <input type="password" placeholder="请输入密码" v-model="num" />
              </div>
              <div class="login-content-lable">
                <label for="">
                  <input type="checkbox" />
                  自动登录
                </label>
                <span>忘记密码？</span>
              </div>
            </form>
            <div>
              <button class="login-btn" @click="login">登录</button>
            </div>
            <div class="login-register">
              <router-link to="/register" class="register">立刻注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      msg: "",
      num: "",
    };
  },
  methods: {
    login() {
      if(this.msg !== "" && this.msg !== "") {
      if (this.msg === "13700000000" && this.num === "111111") {
        axios
          .post(`http://182.92.128.115/api/user/passport/login`, {
            phone: this.msg,
            password: this.num,
          })
          .then((res) => {
            console.log(res);
            this.$router.push({
              path:"/",
              name:res.data.data.name,
            });
            console.log(res.data.data.name)
          })
          .catch((err) => {
            console.log(err);
          });
      }else{
        alert("用户名或密码不正确")
      }
      }else{
        alert("用户名或密码不能为空")
      }
    },
  },
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
.loginform ul li:nth-child(2) a {
  border-bottom: none;
  color: red;
}
.login-content {
  width: 380px;
  height: 316px;
  border: 1px solid #ddd;
  padding: 18px;
  border-top: none;
  box-sizing: border-box;
}
.login-content .login-content-input {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 22px;
}
.login-content .login-content-input i {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
}
.login-content form {
  margin: 15px 0 18px 0;
  font-size: 12px;
  line-height: 18px;
}
.login-content .login-content-input input {
  width: 302px;
  height: 34px;
  box-sizing: border-box;
  border: 1px solid#ccc;
  border-left: none;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 0 2px 2px 0;
  outline: none;
}
.login-content-lable {
  display: flex;
  justify-content: space-between;
}
.login-content-lable input {
  width: 12.67px;
  height: 12.67px;
  margin-left: 6px;
}
.login-btn {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  word-spacing: 4px;
  border: 1px solid #e1251b;
  color: #fff;
  width: 100%;
  height: 36px;
  margin-top: 25px;
  outline: none;
}
.login-register {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.register {
  width: 60px;
  height: 38px;
  font-size: 15px;
  line-height: 38px;
}
</style>