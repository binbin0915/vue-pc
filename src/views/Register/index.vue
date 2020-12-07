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
          <ValidationProvider rules="required|length|phone" v-slot="{ errors }">
            <input
              type="text"
              placeholder="请输入你的手机号"
              v-model="user.phone"
            />
            <span class="prompt">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="top">
          <label for="">验证码:</label>
          <input type="text" v-model="user.code" />
          <img
            src="/api/user/passport/code"
            alt=""
            @click="Verification"
            ref="code"
          />
        </div>
        <div class="top">
          <label for="">登陆密码:</label>
          <input type="password" v-model="user.password" />
          <span class="prompt"></span>
        </div>
        <div class="top">
          <label for="">确认密码:</label>
          <input type="password" v-model="user.repassword" />
        </div>
        <div class="register-content-contros">
          <input
            type="checkbox"
            name="协议"
            class="contros"
            v-model="user.isAgree"
          />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <button @click="register" class="register-btn">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "手机号必须填写",
});
extend("length", {
  validate(value) {
    return value.length === 11;
  },
  message: "长度必须为11位", // 错误信息
});
extend("phone", {
  validate(value) {
    return /^1(3[0-9]|4[01456879]|5[0-3,5-9]|6[2567]|7[0-8]|8[0-9]|9[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不符合规范",
});
export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "",
        password: "",
        repassword: "",
        code: "",
        isAgree: false,
      },
    };
  },
  methods: {
    Verification() {
      this.$refs.code.src = `/api/user/passport/code`;
    },
    async register() {
      try {
        const { phone, password, repassword, code, isAgree } = this.user;
        if (!isAgree) {
          // 这个message是elementui库的，在plugins中引入
          this.$message.error("请同意用户协议");
        }
        if (password !== repassword) {
          this.$message.error("两次密码输入不一致！");
          return;
        }
        if (code.length !== 4) {
          this.$message.error("验证码长度不符合");
          return;
        }
        await this.$store.dispatch("register", { phone, password, code });
        this.$router.push("/login");
      } catch {
        this.$message.error("用户已被注册");
        this.user.password = "";
        this.user.repassword = "";
        this.Verification();
      }
    },
  },
  components: {
    ValidationProvider,
  },
};
</script>

<style lang="less" scoped>
.prompt {
  color: red;
}
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
.register-btn {
  // display:block;
  // position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  background-color: red;
  border: 1px solid red;
  outline: none;
  height: 40px;
  margin-top: 10px;
  margin-left: 490px;
}
</style>