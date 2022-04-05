// 配置路径别名
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {    // 别名  默认@是src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

