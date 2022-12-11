module.exports = {
    devServer:{
      proxy:{ // 配置跨域
      '/api':{
          target:`https://www.szse.cn`, //请求后台接口
          changeOrigin:true, // 允许跨域
          pathRewrite:{
              '^/api' : '' // 重写请求
          }
      }
    },
  }
}
