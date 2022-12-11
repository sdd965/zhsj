<template>
  <transition  name = 'animate__animated animate__bounce' appear
  enter-active-class="animate__fadeIn">
    <el-carousel :interval="4000" type="card" height="200px" v-if="showL">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
  </el-carousel>
  </transition>
</template>

<script>
export default {
name:'lunBoTu',
data() {
  return {
    showL:false
  }
},
mounted() {
  setTimeout(() => {
    this.showL = true
  }, 1800);
},
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>