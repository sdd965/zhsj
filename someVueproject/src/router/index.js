import VueRouter from 'vue-router'
import storeUpPage from '../pages/storeUpPage.vue'
import placePage from '../pages/placePage.vue'
import professionPage from '../pages/professionPage.vue'
import allPlace from '../pages/allPlace.vue'
import allProfession from '../pages/allProfession.vue'
import myRegister from '../pages/register.vue'
import loginPage from '../pages/login.vue'
import nowUser from '../pages/nowUser.vue'
import detailPage from '../pages/detail.vue'
import baseInfo from '../pages/detailPages/base.vue'
import mainIndex from '../pages/detailPages/mainIndex.vue'
import balanceSheet from '../pages/detailPages/balanceSheet.vue'
import profitInfo from '../pages/detailPages/profit.vue'
import cashFlow from '../pages/detailPages/cashFlow.vue'
import resultInfo from '../pages/detailPages/result.vue'
//该文件创建路由器

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router= new VueRouter({
    routes:[
        {
            //去收藏的路由
            name:'souCang',
            path:'/store',
            component:storeUpPage
        },

        {
            //去所有地区下的路由
            path:'/allPlace',
            component:allPlace
        },
        {
            //去所有行业下的路由
            path:'/allProfession',
            component:allProfession
        },
        {
            //去一个行业下所有公司页面的路由
            path:'/profession',
            component:professionPage
        },
        {
            //去一个地区下所有公司页面的路由
            path:'/place',
            component:placePage
        },
        {
            //去到注册页面
            path:"/register",
            component:myRegister
        },
        {
            //去到登陆页面
            path:'/login',
            component:loginPage
        },
        {
            //去到当前用户界面
            path:"/nowUser",
            component:nowUser
        },
        {
            path:'/detail',
            component:detailPage,
            children:[
                {
                    name:'base',
                    path:'base',
                    component:baseInfo
                },
                {
                    name:"mainindex",
                    path:'mainindex',
                    component:mainIndex
                },
                {
                    name:"balancesheet",
                    path:'balancesheet',
                    component:balanceSheet
                },
                {
                    name:"profit",
                    path:"profit",
                    component:profitInfo
                },
                {
                    name:'cashflow',
                    path:'cashflow',
                    component:cashFlow
                },
                {
                    name:'result',
                    path:"result",
                    component:resultInfo
                }
            ]
        }
    ]
})

//全局路由守卫
//用来看看你的route-link是否有权利跳转
// router.beforeEach((to,from,next)=>{
//     // console.log(to),
//     // console.log(from),
//     // console.log(next)
// })
export default router