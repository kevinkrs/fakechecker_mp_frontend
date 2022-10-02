const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/',
  configureWebpack: {
    name: 'FakeChecker',
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-source-map',
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].bundle.js',
    },
    /*optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 100000,
        maxSize: 0,
        minChunks: 2,
        maxAsyncRequests: 5,
        maxInitialRequests: 2,
        automaticNameDelimiter: '~',
        name: true,
      },
    },*/
    performance: {
      // Only enable performance hints for production builds,
      // outside of tests.
      hints: process.env.NODE_ENV === 'production' && !process.env.VUE_APP_TEST && 'warning',
    },
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
  parallel: true,
  devServer: {
    hot: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
});

