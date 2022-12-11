<template>

  <el-main>
    <el-row>
      <el-col :span='12' :offset="6">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color='#2f6be4'>
          <el-menu-item index="1" @click='toBase'>公司概况</el-menu-item>
          <el-menu-item index="2" @click='toMainindex'>主要指标表</el-menu-item>
          <el-menu-item index="3" @click='toProfit'>利润表</el-menu-item>
          <el-menu-item index="4" @click='toBalance'>资产负载表</el-menu-item>
          <el-menu-item index="5" @click='toCashflow'>现金流量表</el-menu-item>
          <el-menu-item index="6" @click='toResult'>预测结果</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" :offset="2">
        <router-view>
        </router-view>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import axios from 'axios'
export default {
name:'detailPage',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        detailData:'',
        code:this.$route.query['code']
      };
    },
    methods: {
      //到基本基本信息页面
      toBase()
      {
        this.$router.push({
          name:'base',
          params:{
            base:this.detailData[0],
            code:this.code
          }
        })
      },
      //到主要指标页面
      toMainindex()
      {
        this.$router.push({
          name:'mainindex',
          params:{
            mainindex:this.detailData[3]//?
          }
        })
      },
      //到利润表页面
      toProfit()
      {
        this.$router.push({
          name:'profit',
          params:{
            profit:this.detailData[1]
          }
        })
      },
      //到资产负载表页面
      toBalance(){
        this.$router.push({
          name:'balancesheet',
          params:{
            balance:this.detailData[4]
          }
        })
      },
      //到现金流量表页面
      toCashflow()
      {
        this.$router.push({
          name:'cashflow',
          params:{
            cashflow:this.detailData[2]
          }
        })
      },
      //到预测结果表页面
      toResult()
      {
        this.$router.push({
          name:'result',
          params:{
            result:this.detailData[5]
          }
        })
      }
    },
    mounted()
    {
        axios({
            //请求方法
            method:"GET",
            //请求url
            url:'http://127.0.0.1:8001/json-server3',

            //字符串查询参数
                
            }
            ).then((value)=>{
                this.detailData = value.data
            })
    }
}
</script>

<style>

</style>