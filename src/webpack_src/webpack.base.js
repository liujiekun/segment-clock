const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const path = require('path')
const config = {
  entry: {
    main: [path.resolve(__dirname, './main.js')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      // 使用extractTextPlugin
      // use: ExtractTextPlugin.extract({
      //   fallback: "style-loader",
      //   use: "css-loader"
      // })
      // 使用extractCssChunks()
      use: [ExtractCssChunks.loader, 'css-loader'],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin({
    //   filename: 'style.css',
    // }),
    new ExtractCssChunks({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}
module.exports = config