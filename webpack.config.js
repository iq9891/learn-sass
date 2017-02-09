var webpack = require("webpack");
//生成css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./css/[name].[contenthash].css",
    disable: false //process.env.NODE_ENV === "development"
});

module.exports = {
    entry: "./client/main.js",
    output: {
      filename: "./js/bundle.js"
    },
    module: {
      rules: [{
          test: /\.scss$/,
          loader: extractSass.extract({
              loader: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallbackLoader: "style-loader"
          })
      }]
    },
    plugins: [
        extractSass
    ]
}
