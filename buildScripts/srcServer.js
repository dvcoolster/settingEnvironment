import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler ,{
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get ('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  // Hard coding for simplicity and testing, imagine this is returned by a real Database
  res.json([
    {"id": 1,"firstname": "bob","lastname": "marley","email": "bob@gmail.com" },
    {"id": 2,"firstname": "rob","lastname": "arley","email": "rob@gmail.com" },
    {"id": 3,"firstname": "job","lastname": "harley","email": "job@gmail.com" },
  ])
})

app.listen (port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open ('http://localhost:' + port);
  }
});
