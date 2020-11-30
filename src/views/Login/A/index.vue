<template>
  <div class="login-content">
            <form action="xxxx">
              <div class="login-content-input">
                <i class="el-icon-user-solid"></i>
                <input type="text" placeholder="手机号" v-model="msg" />
              </div>
              <div class="login-content-input">
                <i class="el-icon-lock"></i>
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
              <router-link to="/register" class="register"
                >立刻注册</router-link
              >
            </div>
          </div>
</template>

<script>
import { reqLogin } from "@api/user";
export default {
  name: 'A',
    data() {
    return {
      msg: "",
      num: "",
    };
  },
  methods: {
    login() {
      const { msg, num } = this;
      reqLogin(msg, num)
        .then((res) => {
          console.log("res",res)
          console.log(res.name,res.token)
          this.$router.push({
            path:"/",
            name:res.name
          })
            // this.$router.push('/')
        })
        .catch((err) => {
          console.log("err",err);
        });
    },
  },
}
</script>

<style lang="less" scoped>
.login-content {
  width: 380px;
  height: 316px;
  border: 1px solid #ddd;
  padding: 18px;
  border-top: none;
  box-sizing: border-box;
}
.login-content-input i{
  line-height: 30px;
  font-size:20px
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
