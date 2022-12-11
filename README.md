##
Vue中的入口文件为main.js，一般不支持随便更改该文件
Vue脚手架项目中存在语法解释器,js代码在某些情况下不被编译成功
Vue在template标签中写上，ref=''属性可以用this.$refs.ref(值)得到一些属性

##
<div>
props配置项
传递数据<div name = "name"></div>
接受数据
props:{
    name:{
        type:String 类型
        required:true 必要性
        defalut: 默认值
    }
}
props是只读的,
</div>

##
mixin.js文件
export const mixin{
    里面写入组件中常用的配置项
}
在其他组件中引入混合 import{mixin} from 路径
然后再配置项中写入mixins:[]
结果:将data中的东西整合，以原DATA为主
生命周期钩子全都要，一般以mixins中的东西为主

##
Vue插件
export default 
{
    install(Vue)
    {
        //全局过滤器
        Vue.filter()
        //混入
        Vue.mixin()
        //全局指令
        Vue.directive('方法名',{
            bind(element,binding)
            {

            },
            inserted(element,binding)
            {

            },
            update(element,binding)
            {

            }
        }),
        Vue.prototype.hello = ()=>
        {}
    }
}
import plugins from '路径'
Vue.use(plugins)

##
在style里面添加scoped使得当前样式只对当前组件负责，不会使该样式成为全局样式
全局样式最好写在app里面

##
子组件给父组件传递参数需要父组件把函数提前交给子组件，子组件用自己的参数调用可以和父组件之间的交互

也可以通过在父组件中给子组件绑定自定义事件，然后再子组件中实现调用从而使得父组件中定义的函数利用子组件中给定的参数执行

