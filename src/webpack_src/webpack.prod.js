var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var baseConfig = require('./webpack.base.js')
var merge = require('webpack-merge')
module.exports = merge(baseConfig, {
  plugins: [
    new CleanWebpackPlugin()
  ],
  mode: 'production'
})