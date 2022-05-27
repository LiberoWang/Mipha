const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './src/',
    hot: true,
    watchContentBase: true,
    port: 9988,
    https: true,
    // openPage: './pc.html',
    host: 'localhost'
  },
  plugins: common.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
});
