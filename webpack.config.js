var webpack = require("webpack");
//生成css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./client/main.js",
    output: {
      filename: "./js/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css!sass") }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./css/[name].[hash].css")
    ]
}
