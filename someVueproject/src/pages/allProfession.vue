<template>
  <el-main>
    <el-container>
    <el-header>请选择你感兴趣的行业</el-header>
    <el-main>
        <el-row :gutter="20">
            <oneProfession v-for="(value, index) in allProfession" :key ='index' :profession='value' @click="toDetailPage(value)"></oneProfession>
        </el-row>
    </el-main>
    </el-container>
  </el-main>
</template>

<script>
import oneProfession from "../components/oneProfession.vue"
export default {
name:'allProfession',
data(){
    return{
        allProfession:["风电设备", "能源金属", "电机", "电池", "非金属材料", "橡胶制品", 
        "电网设备", "光伏设备", "有色金属", "贵金属", "小金属", "汽车零部件", 
        "酿酒行业", "汽车整车", "家电行业", "医疗服务", "电源设备", "化肥行业", "化学制品", "通用设备", "电子元件", "医疗器械", 
    "玻璃玻纤", "化学原料", "生物制品", "交运设备", "消费电子", "专用设备", 
    "塑料制品", "化学制药", "航空机场", "农药兽药", "工程机械", "电力行业",
     "采掘行业", "仪器仪表", "通信设备", "航天航空", "珠宝首饰", "专业服务", 
     "化纤行业", "汽车服务", "电子化学品", "石油行业", "工程建设", "保险", 
     "食品饮料", "包装材料", "环保行业", "医药商业", "银行", "家用轻工", 
     "半导体", "贸易行业", "物流行业", "燃气", "多元金融", "证券", "光学光电子",
      "美容护理", "中药", "装修建材", "水泥建材", "钢铁行业", "铁路公路", "装修装饰", 
      "软件开发", "互联网服务", "计算机设备", "商业百货", "煤炭行业", "纺织服装", "造纸印刷", 
      "农牧饲渔", "公用事业", "房地产开发", "综合行业", "通信服务", "工程咨询服务", "航运港口", 
      "旅游酒店", "房地产服务", "游戏", "文化传媒", "船舶制造", "教育"]
      }
},
components:{
  oneProfession
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
    .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 520px;
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