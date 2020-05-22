var baseConfig = require('./webpack.base.js')
var merge = require('webpack-merge')
module.exports = merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: true
  },
  mode: 'development'
})