<template>
<div>
  <el-container style="height: 650px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <!-- 显示侧边栏 -->
      <asidePage></asidePage>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
      <!-- 头页面 -->
      <headPage></headPage>
      </el-header>
      <div class="line"></div>
      <keep-alive include="allPlace, allProfession, mainPage">
        <!-- 路由区域 -->
      <router-view>
      </router-view>
      </keep-alive>
      <!-- 主页面显示的条件 -->
      <mainPage v-if="this.$route.path == '/'"></mainPage>
    </el-container>
  </el-container>
  <footPage></footPage>
</div>
</template>

<script>
import "animate.css"
import mainPage from "../components/mainPage.vue"
import headPage from "../components/headPage.vue"
import asidePage from "../components/asidePage.vue"
import footPage from "../components/footPage.vue"
export default {
  //主页面组件

    name:'myMain',
    components:{
      mainPage,
      headPage,
      asidePage,
      footPage
    },

}
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
  *{
    text-decoration: none;
  }
  .el-header {
    background-color: #FFF;
    color: #333;
    line-height: 60px;
    border-bottom:1px solid #AAA;
    border-left:1px solid #dcdcdc;
  }
</style>