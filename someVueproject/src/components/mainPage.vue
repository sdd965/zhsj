<template>
<el-main>
<el-row :gutter="20">
  <el-col :span="12" :offset="6">
    <!-- 主页面的头部 -->
    <mainHead></mainHead>
   </el-col>
   <el-col :span='20' :offset="2">
    <!-- 主页面的轮播图部分 -->
    <lunBoTu></lunBoTu>
   </el-col>
</el-row>

</el-main>
</template>

<script>
//主页面
import lunBoTu from '../components/lunbotu.vue' 
import mainHead from '../components/mainHead.vue'
export default {
name:"mainPage",
components:{
    lunBoTu,
    mainHead
}
}
</script>

<style scoped>
.el-main{
  margin-top: 1px;
  background:url('../assets/background.jpeg');
  background-size: 100% 100%;
}
</style>