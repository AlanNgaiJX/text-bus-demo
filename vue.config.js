var path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '富文本编辑器demo',
    }
  },
  outputDir: process.env.outputDir ? process.env.outputDir : 'dist',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/sass/reset.scss'),
      ]
    }
  },
  productionSourceMap: false,// 正式环境关闭 SourceMap
  // webpack内部配置
  configureWebpack: config => {
    config.resolve = {
      // 优先寻找
      extensions: ['.js', '.vue', '.json',".css"],
      // 引用别名
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src')
      }
    }
    
    // npm run build-and-analyzer 触发
    if (process.env.BUILD_ANALYZER === 'YES') {
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
  }
}
