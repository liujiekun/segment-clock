const express = require('express');
const app = express();
const devConfig = require('../src/webpack_src/webpack.dev.js');
const port = devConfig.devServer.port || 3000;
const webpack = require('webpack');
var compiler = webpack(devConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '../src/webpack_src/dist',
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => { }
})

// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

app.use(devMiddleware)
app.use(hotMiddleware)
app.use('/', express.static('../src/webpack_src/dist'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})