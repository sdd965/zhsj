<template>
  <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>行情中心</template>
          <el-menu-item-group>
            <template slot="title">点击查看</template>
                <el-menu-item index="1-1" @click ='toMainArea'>地区中心</el-menu-item>
                <el-menu-item index="1-2" @click ='toMainProfession'>行业中心</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>用户中心</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1" @click="toRegister">注册</el-menu-item>
            <el-menu-item index="1-2" @click="toLogin">登陆</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">分组二</template>
            <el-menu-item index="2-1" @click='toNowUser'>当前用户</el-menu-item>
            <el-menu-item index="2-2" @click='exit'>退出登陆</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组三">
            <el-menu-item index="2-3" @click="toStore">我的收藏</el-menu-item>
            <el-menu-item index="2-4" >历史记录</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>设置</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">属性</el-menu-item>
            <el-menu-item index="3-2">帮助</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:"asidePage",
    methods: {
      //跳转到收藏页面
        toStore()
        {
            this.$router.replace({
                path:'/store'
            })
        },
      //跳转到一个地区下的所有公司页面
        toPlacepage(a){
            this.$router.push({
                path:'/place',
                query:{
                  place:a
                }
            })
        },
        //跳转到一个职业下的所有公司页面
        toProfessionpage(a){
            this.$router.push({
                path:'/profession',
                query:{
                  profession:a
                }
            })
        },
        //跳转到所有地区页面
        toMainArea()
        {
          this.$router.push({
            path:'/allPlace'
          })
        },
        //跳转到所有行业页面
        toMainProfession()
        {
          this.$router.push({
            path:"/allProfession",
          })
        },
        //跳转到注册页面
        toRegister()
        {
          this.$router.push({
            path:"/register"
          })
        },
        //跳转到登陆页面
        toLogin()
        {
        if(this.nowUser =='')
          {
          this.$router.push({
            path:"/login"
          })
          }
          else{
            alert('当前已经有用户登陆')
          }
        },
        //跳转到当前页面部分
        toNowUser()
        {
        if(this.nowUser !=='')
          {
          this.$router.replace({
            path:'/nowUser'
          })
          }
          else{
            alert('当前没有用户登陆')
          }
        },
        exit()
        {
          if(this.nowUser == '')
          {
            alert('当前没有用户登陆')
          }
          else
          {
          console.log(this.$store.commit('userPart/EXIT'))
            alert('退出成功')
            this.$router.replace({
              path:"/"
            })
          }
        }
    },
    mounted() {
      this.$bus.$on('toPlacepage',this.toPlacepage)
      this.$bus.$on('toProfessionpage',this.toProfessionpage)
    },
    computed:{
      ...mapState('userPart',{nowUser:'nowUser'})
    }
}
</script>

<style>

</style>