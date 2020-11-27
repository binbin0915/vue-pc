<template>
    <header class="header">
      <div class="header-top">
        <div class="header-header">
          <div class="header-left">
            <p>尚品汇欢迎您！</p>
            <p>
              <span>请</span>
              <router-link to="/login">登录</router-link>
              <router-link to="/register" class="register"
                >免费注册</router-link
              >
            </p>
          </div>
          <div class="header-right">
            <a href="xxxx">我的订单</a>
            <a href="xxxx">我的购物车</a>
            <a href="xxxx">我的尚品汇</a>
            <a href="xxxx">尚品汇会员</a>
            <a href="xxxx">企业采购</a>
            <a href="xxxx">关注尚品汇</a>
            <a href="xxxx">合作招商</a>
            <a href="xxxx">商家后台</a>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <router-link class="header-bottom-left" to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
        <div class="header-bottom-right">
          <form action="xxxx">
            <input type="text" />
            <button @click="search">搜索</button>
          </form>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    search() {
      this.$router.push("/search")
    },
  },
};
</script>

<style lang="less" scoped>
.header-top {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
}
.header-header {
  width: 1200px;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
}
.header-left {
  display:flex;
  justify-content: space-between;
  a {
    margin: 0 5px;
  }
}
.header-left p {
  margin-right: 10px;
}
.register {
  padding: 0 5px;
  margin-left: 5px;
  border-left: 1px solid #b3aeae;
}
.header-right a {
  padding: 0 10px;
}
.header-right a + a {
  border-left: 1px solid #b3aeae;
}
.header-bottom {
  width: 1200px;
  height: 106px;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
}
.header-bottom-left img {
  width: 175px;
  margin: 25px 45px;
}
.header-bottom-right {
  margin-top: 35px;
}
.header-bottom-right input {
  width: 490px;
  height: 32px;
  float: left;
  padding: 0 4px;
  border: 2px solid red;
  box-sizing: border-box;
  outline: none;
}
.header-bottom-right button {
  height: 32px;
  width: 68px;
  float: left;
  background-color: #ea4a36;
  color: white;
  border: none;
  outline: none;
}
</style>
