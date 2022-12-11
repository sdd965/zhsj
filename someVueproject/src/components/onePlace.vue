<template>
              <el-col :span="4"><div class="grid-content bg-purple" @click="toDetailPage(place)">{{place}}</div></el-col>
</template>

<script>
export default {
name:"onePlace",
props:{
    place:{
        type:String,
        required:true
    }
},
methods:{
  toDetailPage(a)
  {
    console.log(a)
    this.$bus.$emit('toPlacepage',a)
  }
}
}
</script>

<style scoped>

  .el-col {
    border-radius: 4px;
    margin-top: 20px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px;
    min-height: 36px;
    transition-duration: 0.5s;
  }

  .grid-content:hover{
    transform: translate(0,-20px);
    background-color: #e7e9eb;
    color: #6c7ffd;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>