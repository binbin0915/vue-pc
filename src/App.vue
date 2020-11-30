<template>
  <div>
    <Header />
    <!-- 加载显示当前路由组件 -->
    <router-view></router-view>
    <!-- 当不是登录或注册时就显示 -->
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
import Header from '@comps/Header'
import Footer from '@comps/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
</style>
