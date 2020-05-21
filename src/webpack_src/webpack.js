var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require("path")

const config = {
 entry: path.resolve(__dirname, './main.js'),
 output: {
  path: path.resolve(__dirname, './dist'),
  filename: '[name].js'
 },
 module: {
  rules: [{
   test: /\.css$/,
   use: [{
    loader: ExtractCssChunks.loader,
    options: {
     publicPath: path.resolve(__dirname, './css/')
    }
   }, {
    loader: 'css-loader',
    options: {
     modules: true
    }
   }]
  }]
 },
 plugins: [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, './index.html'),
   filename: 'index.html',
   inject: true
  }),
  // new ExtractTextPlugin({
  //  filename: 'style.css',
  //  allChunks: true
  // }),
  new ExtractCssChunks({
   filename: '[name].css',
   chunkFilename: '[id].css',
  }),
 ]
}
module.exports = config