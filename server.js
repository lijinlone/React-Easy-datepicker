var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.devServer = {
    contentBase: './build',
    stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false
    }
 }

config.devtool='inline-source-map'

config.entry[0]='webpack-dev-server/client?http://0.0.0.0:3000'
config.entry[1]='webpack/hot/only-dev-server'

console.log(config.output.publicPath)

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) console.log(err)
    console.log('Listening at localhost:3000');
});
