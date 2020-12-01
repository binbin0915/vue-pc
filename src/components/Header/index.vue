<template>
  <header class="header">
    <div class="header-top">
      <div class="header-header">
        <div class="header-left">
          <p>尚品汇欢迎您！❀</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="header-right">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <router-link class="header-bottom-left" to="/">
        <img src="./images/logo.png" alt="" />
      </router-link>
      <div class="header-bottom-right">
        <form @submit.prevent="search">
          <input type="text" v-model="searchText" />
          <!-- 
            问题：点击搜索，路径出现问号(原因是提交了表单)
            1.button 按钮如果没有type 那么在表单中 默认type就是submit
            此时会提交表单，事件就绑定在form上
              @submit.prevent="search"
            2.不要form表单
              @click="search"
           -->
          <button>搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      // 搜索的内容
      searchText: "",
    };
  },
  methods: {
    // 搜索功能函数
    // search() {
    //   const { searchText } = this;
    //   const params = searchText ? `/${searchText}` : "";
    //   const locast = "/search" + params;
    //   this.$router.push({
    //     name:"search",
    //     params:{
    //       searchText
    //     }
    //   });
    // },
    //
    // 搜索功能函数
    search() {
      // 获取搜索的数据
      const { searchText } = this;
      const { categoryName } = this.$route.query;
      const location = {
        name: "search", // 使用命名路由
      };
      // 添加query参数
      if (categoryName) {
        location.query = this.$route.query;
      }
      // 编程式导航：原因将来要做搜索功能（要发送请求）

      location.params = searchText ? { searchText } : "";
      this.$router.push(location);
    },
  },
};
</script>

<style lang="less" scoped>
// lang="less" 当前可以使用less写样式
// sceped 作用域样式代码（当前样式只对当前组件生效，其他组件没有效果）
/* 
  当你添加scoped属性
  给当前组件所有解构添加一个唯一的属性 data-v-xxx
  所有元素选择器都会加上这个属性、
    之前: .header-aaa { }
    之后：.header-aaa[data-v-xxx] {}
  因为只有当前组件具有这个属性 data-v-xxx
  所以样式只会对当前组件生效，其他组件不会影响
*/
.header-top {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
}
.header-header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-left {
  display: flex;
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
  display: flex;
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
