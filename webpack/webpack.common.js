const path = require('path');
const webpack = require('webpack');
const argv = require('yargs-parser')(process.argv.slice(2));
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'regenerator-runtime/runtime',
    ],
    mipha: './src/index'
  },
  output : {
    path       : path.join(__dirname, '/../dist/assets'),
    filename   : '[name].js',
    publicPath : '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react')
              ],
              plugins: [
                require.resolve('babel-plugin-lodash'),
                require.resolve('babel-plugin-transform-class-properties'),
                require.resolve('@babel/plugin-syntax-dynamic-import'),
                [require.resolve('@babel/plugin-transform-runtime'), {
                  helpers: false,
                  regenerator: true
                }]
              ]
            }
          }
        ]
      },
      {
        test: /\.(c|sc)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        sideEffects: true
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      $PRODUCTION: argv.mode === 'production',
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          priority: 1,
          enforce: true
        }
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    alias: {
      "@utils": path.resolve(__dirname,'..','src/utils'),
      "@components": path.resolve(__dirname,'..','src/components')
    }
  }
};
