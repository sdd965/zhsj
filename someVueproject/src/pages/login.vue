<template>
  <el-main>
        <el-row>
            <el-col :span="8" :offset="8">
                <el-form  ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名" style="margin-top:30px">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" @keyup.enter="onSubmit">登陆</el-button>
                        <el-button @click ='cancel'>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>  
  </el-main>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
name:'loginPage',
    data() {
      return {
        form: {
          name: '',
          password:'',
        }
      }
    },
    methods: {
      ...mapMutations('userPart',{LOGIN:'LOGIN'}),
      onSubmit() {
        if(!localStorage.getItem(this.form.name))
        {
          alert('用户不存在')
        }
        else
        {
          const nowUser = JSON.parse(localStorage.getItem(this.form.name))
          if(this.form.password == nowUser.oldpass)
          {
            this.LOGIN(nowUser)
            alert('成功登陆!')
            this.cancel()

          }
          else{
            alert("密码错误")
          }
        }
      },
      cancel()
      {
        this.$router.replace('/')
      }
    }
}
</script>

<style scoped>
.el-col-offset-8 {
    border: 2px solid #aaa;
    border-radius: 10px;
    margin-top: 100px;
    background-color: #f2f2f2;
}
.el-form-item {
    margin-right: 40px;
}
.el-main{
    background-color: #a3a3a3;
}
</style>