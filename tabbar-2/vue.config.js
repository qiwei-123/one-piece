module.export = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',

      }
    }
  }
}

// 最好与src 在同级目录下 否则可能出现别名错误