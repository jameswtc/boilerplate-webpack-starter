const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');

// noinspection JSCheckFunctionSignatures
const compiler = webpack(config, options);

const port = 8000;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});



