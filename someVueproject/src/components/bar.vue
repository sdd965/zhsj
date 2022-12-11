<template>
  <div class = 'container'>
    <div id = 'echart'>

    </div>
  </div>
</template>

<script>

export default {
name:"barCharts",
data()
{
    return{
        //echart参数
        
        option:{
            xAxis: {
                type: 'category',
                data: ['暂无','暂无','暂无','暂无','暂无']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [0,0,0,0,0],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
                }
            ]
        },
        //用于展示的数据集
        myChart:''
    }
},
props:["chartData"],
mounted() {
    this.getLoadEcharts();
    this.updateEcharts()
  },
methods: {
    //初始化图片容器
    getLoadEcharts(){
        this.myChart = this.$echarts.init(document.getElementById("echart"))
    },
    //更新echarts图片
    updateEcharts(){
        this.myChart.setOption(this.option);
    },
  },
watch:{
    chartData:{
        handler(newValue)
        {
            this.option['xAxis']['data']=Object.keys(newValue).slice(1,6)
            let o = []
            this.option['xAxis']['data'].forEach(value => {
                let showValue = this.chartData[value]
                if(showValue.indexOf('万')!== -1 || showValue.indexOf('亿')!==-1)
                {
                    showValue = showValue.slice(0,showValue.length - 1)
                }
                if(showValue.indexOf('--')==1)
                {
                    showValue = 0
                }
                o.push(showValue)
                })
            this.option['series'][0]['data']= o
            this.updateEcharts()
        }
    }
}
}
</script>

<style scoped>
.container{
    margin: 0px auto;
    width: 800px;
    height: 300px;
}
#echart{
    width: 100%;
    height: 100%;
}
</style>