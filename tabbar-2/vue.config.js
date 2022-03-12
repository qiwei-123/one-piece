const path = require('path');
module.export = {
  configureWebpack: {
    resolve: {
      alias: {
        // 'assets': path.join(__dirname,'assets'),
        '@': path.join(__dirname,'src'),
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',

      }
    }
  }
}
console.log();
// 最好与src 在同级目录下 否则可能出现别名错误