const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: '/dist',
  configureWebpack: {
    name: 'FakeChecker',
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-source-map',
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].bundle.js',
    },
    performance: {
      // Only enable performance hints for production builds,
      // outside of tests.
      hints: process.env.NODE_ENV === 'production' && !process.env.VUE_APP_TEST && 'warning',
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
});
