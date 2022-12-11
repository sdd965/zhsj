<template>
  <el-row>
    <el-col :span='3' style="height:60px">
    <img src = '../assets/logo1.png' style="width: 180px; height:59px" > 
    </el-col>
    <el-col :span ='9' :offset="2"> 
      <el-form :inline="true" :model="form" class="demo-form-inline"   @keyup.enter="onSubmit">
        <el-form-item label="搜索">
          <el-input v-model="form.code" placeholder="公司代码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="6" :offset="4" >        
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color='#2f6be4'>
          <el-menu-item index="1" @click = 'toMainPage'>回到主页</el-menu-item>
          <el-menu-item index="2">指南</el-menu-item>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">关于我们</a></el-menu-item>
        <i class="el-icon-user" style="margin-right: 15px"></i>
        <span>{{nowUser.name}}</span>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'headPage',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        form: {
          code: '',
        }
      };
    },
    computed:{
      ...mapState('userPart',{nowUser:'nowUser'})
    },
    methods:
    {
      toMainPage()
      {
        this.$router.replace({
          path:'/'
        })
      },
      onSubmit() {
        this.$router.push({
          path:'/detail',
          query:{
            code:this.form['code']
          }
        })
      }
    }
}
</script>

<style scoped>
.el-form-item{
   margin-top:0;
  margin-bottom: 0;
}
.el-button {
  margin-top: 10px;
}
.el-input {
    margin-top: 10px;
}
.el-row{
  height: 60px;
}
.el-form{
  height: 60px;
}

</style>