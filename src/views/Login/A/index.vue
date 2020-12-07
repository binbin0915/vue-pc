<template>
  <div class="login-content">
    <form action="xxxx">
      <div class="login-content-input">
        <i class="el-icon-user-solid"></i>
        <input type="text" placeholder="手机号" v-model="phone" />
        <p class="span" v-show="isShow">请输入11位手机号!</p>
      </div>
      <div class="login-content-input">
        <i class="el-icon-lock"></i>

        <input type="password" placeholder="请输入密码" v-model="password" />
        <p class="span" v-show="isDown">请输入6-12位数字组合的密码</p>
      </div>
      <label for="">
        <input type="checkbox" @click="Rememberpassword" />记住密码
      </label>
      <div class="login-content-lable">
        <label for="">
          <input type="checkbox" />
          自动登录
        </label>
        <span>忘记密码？</span>
      </div>
    </form>
    <div>
      <button class="login-btn" @click="logins">登录</button>
    </div>
    <div class="login-register">
      <router-link to="/register" class="register">立刻注册</router-link>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";
export default {
  name: "A",
  data() {
    return {
      phone: "",
      password: "",
      isShow: false,
      isDown: false,
    };
  },
  methods: {
    logins() {
      const { phone, password } = this;
      if (/^1[345678]\d{9}$/.test(phone)) {
        this.isShow = false;
        if (/^[\d]{6,12}$/.test(password)) {
          this.isDown = false;
          reqLogin(phone, password)
            .then((res) => {
              console.log("res", res);
              console.log(res.name, res.token);
              this.$router.push({
                path: "/",
                name: name,
              });
              location.reload([true]);
              // sessionStorage.setItem(res.name, res.token);
              localStorage.setItem("name", res.name);
              localStorage.setItem("token", res.token);
            })
            .catch((err) => {
              console.log("err", err);
            });
        } else {
          this.isDown = true;
        }
      } else {
        this.isShow = true;
      }
    },
    Rememberpassword() {
      if (localStorage.getItem("password")) {
        localStorage.removeItem("password");
      } else {
        localStorage.setItem("password", this.password);
      }
    },
  },
  mounted() {
    const password = localStorage.getItem("password");
    this.password = password;
  },
};
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
.login-content-input i {
  line-height: 30px;
  font-size: 20px;
}
.login-content .login-content-input {
  // display: flex;
  // justify-content: flex-end;
  margin-bottom: 15px;
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
form .span {
  font-size: 16px;
  color: #e1251b;
  letter-spacing: 5px;
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
