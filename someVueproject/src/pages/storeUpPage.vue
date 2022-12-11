<template>
      <el-main>
        <el-table :data="tableData" :max-height="520" @cell-click='toDetailPage'>
            <el-table-column v-for="(value, k) in tableData[0]" :key="k" :prop = 'k' :label = 'k' sortable width = '120'>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="删除"
            width="55">
                <template slot-scope="scope">
                <el-button @click="deleTe(scope.$index,scope.row)" type="warning">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-main>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'myStore',
    data() {
        return {
            tableData: []
        }
    },
    mounted() {
        this.tableData = localStorage.getItem(this.nowUser.id)?JSON.parse(localStorage.getItem(this.nowUser.id)):[]
    },
    computed:{
        ...mapState('userPart',{nowUser:'nowUser'}),
    },
    methods:{
        deleTe(a,b)
        {
            console.log(b)
        },
        toDetailPage(row)
        {
            this.$router.push({
                path:'/detail',
                query:{
                    code:row['代码']
                }
            })
        }
    }
}
</script>

<style>

</style>