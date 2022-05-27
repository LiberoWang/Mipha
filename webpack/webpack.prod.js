const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'eval-source-map',
  cache: false,
  plugins: common.plugins.concat([
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'mipha.html',
      title: '米法',
      chunks: ['vendor', 'runtime', 'mipha'],
      inject: true,
      minify: {
        html5                          : true,
        collapseWhitespace             : true,
        minifyCSS                      : true,
        minifyJS                       : true,
        minifyURLs                     : false,
        removeAttributeQuotes          : true,
        removeComments                 : true,
        removeEmptyAttributes          : true,
        removeOptionalTags             : true,
        removeRedundantAttributes      : true,
        removeScriptTypeAttributes     : true,
        removeStyleLinkTypeAttributese : true,
        useShortDoctype                : true
      }
    }),
    new CleanWebpackPlugin()
  ])
});
