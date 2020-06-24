const proxy = require('http-proxy-middleware');
module.exports = {   
devServer:{
    host: 'localhost',//target host
    port: 8080,
    proxy:{
        '/api':{
            target: 'http://39.97.33.178/',//代理地址，这里设置的地址会代替axios中设置的baseURL
            changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            //pathRewrite方法重写url
            pathRewrite: {
                '^/api': '/api' 
           }
    }}
},
//...
}