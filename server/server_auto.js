const express = require('express');
const app = express();
const devConfig = require('../src/webpack_src/webpack.dev.js');
const port = devConfig.devServer.port || 3000;
const webpack = require('webpack');
var compiler = webpack(devConfig);
const opn = require('opn')

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => { }
})

app.use(devMiddleware)
app.use(hotMiddleware)

app.use('/', express.static('../src/webpack_src/dist'));

var autoOpenBrowser = devConfig.devServer.open;

var uri = 'http://localhost:' + port;
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser) {
    opn(uri)
  }
})

app.listen(port)