<template>
  <el-main>
    <el-container>
    <el-header>请选择你感兴趣的地区</el-header>
    <el-main>
        <el-row :gutter="20">
            <onePlace v-for="(value, index) in allPlace" :key ='index' :place='value'></onePlace>
        </el-row>
    </el-main>
    </el-container>
  </el-main>
</template>

<script>
//所有地区组件
import onePlace from '../components/onePlace.vue'
export default {
name:'allPlace',
data(){
    return{
        allPlace:['安徽', '北京', '重庆', '福建', '广东', '广西', '甘肃', '贵州', '河北', '海南', '湖南', '河南', '黑龙江', '湖北', '吉林', 
    '江西', '江苏', '辽宁', '宁夏', '内蒙古', '青海', '上海', '陕西', '山西', '四川', '山东', '天津', '新疆', '西藏', '云南', '浙江']
    }
},
components:{
    onePlace
},

}
</script>

<style scoped>
  .el-header{
    background-color: #8dcbef;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-weight: 700;
  }
  .el-main{
    background-color: #e3f1ff;
    color: #333;
    height: 500px;
    text-align: center;
    line-height: 80px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-row {
    margin-bottom: 20px;
  }
</style>