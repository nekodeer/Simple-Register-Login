const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
  app.use(createProxyMiddleware('/api',{
    target:'http://localhost:3050',
    changeOrigin:true,
    pathRewrite:{"^/api":""}
  }))
}