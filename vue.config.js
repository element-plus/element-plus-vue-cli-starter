module.exports = {
    publicPath:'./',
    configureWebpack:{
        resolve: {
            alias: {
              'assets': '@/assets',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views',
              'plugins': '@/plugins',
            }
          }
    }
}
