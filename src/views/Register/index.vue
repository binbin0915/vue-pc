<template>
  <div class="register">
    <div class="register-contain">
      <div class="register-top">
        <h3>
          注册新用户
          <span>我有账号,去<router-link to="/login">登录</router-link></span>
        </h3>
      </div>
      <div class="register-content">
        <div class="register-content-top top">
          <label for="">手机号:</label>
          <input type="text" placeholder="请输入你的手机号" v-model="phone" />
        </div>
        <div class="top">
          <label for="">验证码:</label>
          <input type="text" v-model="code" />
          <img src="/api/user/passport/code" alt="" />
        </div>
        <div class="top">
          <label for="">登陆密码:</label>
          <input type="password" v-model="password" />
        </div>
        <div class="top">
          <label for="">确认密码:</label>
          <input type="password" />
        </div>
        <div class="register-content-contros">
          <input type="checkbox" name="协议" class="contros" />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <button @click="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqRegister } from "@api/register.js";
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      password: "",
      code: "",
      num: 5,
    };
  },
  methods: {
    register() {
      const { phone, password, code } = this;
      reqRegister(phone, password, code)
        .then((res) => {
          console.log(res);
              this.$router.push({
                path: "login",
              });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.register-contain {
  width: 1200px;
  height: 445px;
  margin: 0 auto;
  border: 1px solid #dfdfdf;
}
.register-top h3 {
  margin: 0;
  padding: 6px 15px;
  color: #333;
  font-size: 20px;
  line-height: 30px;
  background-color: #ececec;
  display: flex;
  justify-content: space-between;
}
.register-top h3 span {
  font-size: 14px;
}
.register-top h3 span a {
  color: #e1251b;
  margin-left: 5px;
}
.register-content-top {
  margin-top: 40px;
}
.register-content div.top {
  margin-bottom: 18px;
  padding-left: 390px;
}
.register-content label {
  font-size: 14px;
  width: 96px;
  display: inline-block;
  text-align: right;
}
.register-content div input {
  width: 270px;
  height: 38px;
  padding-left: 8px;
  margin-left: 5px;
  border: 1px solid #999;
  box-sizing: border-box;
}
.register-content-contros {
  text-align: center;
  padding: 0;
  margin: 0;
}
.register-content-contros .contros {
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
</style>