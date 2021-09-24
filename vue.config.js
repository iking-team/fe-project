


const iksCssUtil = require('./vue.ikscss');
module.exports = {
    // 基本路径
    publicPath: "./",
    // 输出文件目录
    outputDir: process.env.outputDir,
    pages: {
      index: {
        // 修改入口
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    
    css: {
        // css预设器配置项，当需要自定义皮肤的时候可以打开注释，并且按照文档执行即可
        // loaderOptions:{
        //   less:{
        //     modifyVars:iksCssUtil.getLessVariables('public/itheme-index.less'),
        //     javascriptEnabled: true  
        //   },
        // }
      
      }
}
