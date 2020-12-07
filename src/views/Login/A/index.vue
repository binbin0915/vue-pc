<template>
  <div class="login-content">
    <form action="xxxx">
      <div class="login-content-input">
        <ValidationProvider rules="required|length|phone" v-slot="{ errors }">
          <i class="el-icon-user-solid"></i>
          <input type="text" placeholder="手机号" v-model="phone" />
          <span :style="{ color: 'red',display: 'flex' }">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="login-content-input">
        <ValidationProvider rules="password" v-slot="{errors}">
        <i class="el-icon-lock"></i>
        <input type="password" placeholder="请输入密码" v-model="password" />
        <span :style="{ color: 'red',display: 'flex' }">{{errors[0]}}</span>
        </ValidationProvider>
      </div>
      <label for="" :style="{float:'left'}" > <input type="checkbox" />记住密码 </label>
      <div class="login-content-lable">
        <label for="">
          <input type="checkbox" v-model="isCheck" />
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
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { mapState } from "vuex";
extend("required", {
  ...required,
  message: "手机号必须填写",
});
extend("length",{
  validate(value){
    return value.length === 11
  },
  message:"长度必须为11位"
})
extend("phone", {
  validate(value) {
    return /^1(3[0-9]|4[01456879]|5[0-3,5-9]|6[2567]|7[0-8]|8[0-9]|9[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不符合规范",
});
extend("password", {
  ...required,
  message: "密码必须填写",
});
export default {
  name: "A",
  data() {
    return {
      phone: "",
      password: "",
      isAutoLogin: false,
      isCheck: true,
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },
  created() {
    if (this.isCheck && this.token) {
      this.$router.replace("/");
    }
  },
  methods: {
    async logins() {
      try {
        if (this.isAutoLogin) return;
        this.isAutoLogin = true;
        const { phone, password } = this;
        await this.$store.dispatch("login", { phone, password });
        localStorage.setItem("token", this.token);
        localStorage.setItem("name", this.name);
        this.$router.replace("/");
        // location.reload([true]);
      } catch {
        this.isAutoLogin = false;
      }
    },
    // Rememberpassword() {
    //   if (localStorage.getItem("password")) {
    //     localStorage.removeItem("password");
    //   } else {
    //     localStorage.setItem("password", this.password);
    //   }
    // },
  },
  // mounted() {
  //   const password = localStorage.getItem("password");
  //   this.password = password;
  // },
  components: {
    ValidationProvider,
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
