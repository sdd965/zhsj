<template>
  <el-main>
    <el-row :gutter="20">
      <el-col :span='20' :offset="2">
        <div>
          <el-avatar icon="el-icon-user-solid" :size='100'></el-avatar>
        </div> 
      </el-col >
      <el-col :span='20' :offset="2">
        <el-descriptions class="margin-top" title="用户信息" :column="3" border>
            <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user"></i>
                  用户名
                </template>
                {{nowUser.name}}
          </el-descriptions-item>
          <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-mobile-phone"></i>
                  手机号
                </template>
                {{nowUser.phone}}
          </el-descriptions-item>
          <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user"></i>
                  性别
                </template>
                  {{nowUser.sex}}
          </el-descriptions-item>
          <el-descriptions-item :contentStyle="{'width': '40%'}">
                <template slot="label" >
                  <i class="el-icon-tickets"></i>
                  备注
                </template>
                {{nowUser.introduce}}
          </el-descriptions-item>
          <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-office-building"></i>
                  生日
                </template>
                {{nowUser.date1}}
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'nowUser',
computed:
{
...mapState('userPart',{nowUser:'nowUser'}),
}
}
</script>

<style scoped>
.el-col{
  margin-top:20px;
}
</style>