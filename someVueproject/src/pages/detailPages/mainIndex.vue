<template>
<div>
  <h1>{{title}}</h1>
  <barChart :chartData='chartData'></barChart>
  <el-container>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    @cell-click = changeChart
    :max-height="500">
    <el-table-column v-for="(value,k) in tableData[0]" :key="k" :prop='k' :label="k" >
    </el-table-column>
  </el-table>
  </el-container>
</div>
</template>

<script>
import barChart from '../../components/bar.vue'
export default {
    name:'mainIndex',
    data(){
      return{
        mainIndex:this.$route.params.mainindex,
        tableData:[],
        chartData:{},
        title:""
      }
    },
    components:{
      barChart
    },
    methods:{
      //将数据变成展示需要的数据结构
      formData(data)
      {
        let dataArrat = []
        let keyList = Object.keys(data)
        for(let i in keyList)
        {
          let newobj = {'属性':keyList[i], ...data[keyList[i]],}
          dataArrat.push(newobj)
        }
        this.tableData = dataArrat
      },
      //将点击的数据传给图像组件并更改标题
      changeChart(row)
      {
        this.chartData = row
        this.title = row['属性']
      }
    },
    beforeMount()
    {
      this.formData(this.mainIndex)
    }
}
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
}
</style>