<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <div>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.name" placeholder="必填"></el-input>
                    </el-form-item>
                     <el-form-item label="密码">
                        <el-input type="password" v-model="form.oldpass" placeholder="必填"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input type="password" v-model="form.newpass"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form.sex" placeholder="请选择性别">
                        <el-option label="男" value="male"></el-option>
                        <el-option label="女" value="female"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出生日期">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="记住我">
                        <el-switch v-model="form.remember"></el-switch>
                    </el-form-item>
                    <el-form-item label="个人简介">
                        <el-input type="textarea" v-model="form.introduce"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
name:"myRegister",
data() {
      return {
        form: {
          id:nanoid(),
          name: '',
          oldpass:'',
          newpass:'',
          phone:'',
          sex: '',
          date1: '',
          remember: false,
          introduce: '',
        },
      }
    },
    methods: {
      onSubmit() {
        if(localStorage.getItem(this.form.name))
        {
            alert('用户名已经被注册')
        }
        else if(this.form.name != '' && this.form.oldpass != '')
        {
            if(this.form.oldpass != this.form.newpass)
            {
                alert('两次密码输入不一致')
            }
            else{
                alert('注册成功')
                localStorage.setItem(this.form.name,JSON.stringify(this.form))
                this.$router.replace('/')
            }
        }
        else{
            alert('有未填项')
        }

      }
    }
}
</script>

<style scoped>
</style>