const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('../src/webpack_src/dist'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})