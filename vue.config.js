// 路径别名配置
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'common': 'components/common',
        'content': 'components/content',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer: {
    public: '192.168.43.59:8080',
    hot: true,
    disableHostCheck: true,
  }
}