<template>
  <div>
    <hr>
    <el-descriptions title="实时数据">
      <el-descriptions-item label="xxx">xxx</el-descriptions-item>
      <el-descriptions-item label="xxx">xxx</el-descriptions-item>
      <el-descriptions-item label="xxx">xxx</el-descriptions-item>
      <el-descriptions-item label="xxx">xxx</el-descriptions-item>
    </el-descriptions>
    <hr>
    <kLine :cname='baseInfo["A股简称"]' :code='code'>
    </kLine>
    <hr>
    <el-container>
    <el-descriptions class="margin-top" title="公司基本信息" :column="2"  border>
      <el-descriptions-item v-for="(value,key) in baseInfo" :key="key" :contentStyle="{'width': '40%'}">
        <template slot="label">
          {{key}}
        </template>
        {{value}}
      </el-descriptions-item>
    </el-descriptions>
    </el-container>

  </div>
</template>

<script>
import kLine from '../../components/kline.vue'
export default {
name:"baseInfo",
data()
{
    return{
        baseInfo:this.$route.params.base,
        code:this.$route.params.code
    }
},
components:{
  kLine
}
}
</script>

<style scoped>
.el-container{
  height: 500px;
  overflow: auto;
}
</style>