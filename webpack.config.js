var path = require('path');
var webpack = require('webpack');
var cloud9IP = process.env.IP;
var cloud9Port = process.env.PORT;
module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?https://0.0.0.0:8080',
        './app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    stats: {
        colors: true
    },
    devServer: {
        disableHostCheck: true,
        host: cloud9IP,
        port: cloud9Port,
        watchContentBase: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
