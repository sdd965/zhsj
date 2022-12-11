<template>
    <el-main>
        <el-table :data="tableData" :max-height="520" @cell-click='toDetailPage'>
            <el-table-column v-for="(value, k) in tableData[0]" :key="k" :prop = 'k' :label = 'k' sortable>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="收藏"
            width="55">
                <template slot-scope="scope">
                <el-button @click="storeUp(scope.$index,scope.row)" type="warning" icon="el-icon-star-off" circle></el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-main>

</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    name:'placePage',
    
    data() {
        return {
            tableData: [],
            storeData:[]
        }
    },
    methods:{
        storeUp(a,b)
        {
            if(this.nowUser)
            {this.storeData.push(b)
            localStorage.setItem(this.nowUser.id,JSON.stringify(this.storeData))}
            else{
                alert('用户未登陆')
            }
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
    },
    mounted()
    {
        axios({
            //请求方法
            method:"GET",
            //请求url
            url:'http://127.0.0.1:8001/json-server2',

            //字符串查询参数
                
            }
            ).then((value)=>{
                this.tableData = value.data
            })
    },
    computed:{
        ...mapState('userPart',{nowUser:'nowUser'}),
    }
}
</script>

<style scoped>
</style>