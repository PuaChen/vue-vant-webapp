module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  runtimeCompiler: false,
  productionSourceMap: false,
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', //API服务器的地址
        ws: true,  //代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': '/api',
        }
      }
    },
  }
};