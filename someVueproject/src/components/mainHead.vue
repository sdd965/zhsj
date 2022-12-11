<template>
    <div class="grid-content bg-purple">
        <transition  name = 'animate__animated animate__bounce' appear
        enter-active-class="animate__fadeInLeft">
        <h1 v-if="showh1">风暴眼</h1>
        </transition>
        <transition  name = 'animate__animated animate__bounce' appear
        enter-active-class="animate__fadeInLeft">
        <p v-if="showp">一套为投资者、理财者、经营者和股东准备的上市公司财务分析系统</p>
        </transition>
    </div>
</template>

<script>
export default {
    name:"mainHead",
    data() {
        return {
            showh1:true,
            showp:false
        }
    },
    mounted()
    {
        setTimeout(() => {
            this.showp = true
        }, 700);
    }
}
</script>

<style scoped>
    .grid-content h1{
        margin: 0;
        font-size: 34px;
        color: #f2f2f2;
    }

    .grid-content p{
        font-size: 18px;
        line-height: 28px;
        color: #888;
        margin: 10px 0 20px;
    }
    .grid-content{
        text-align: center;
    }

</style>