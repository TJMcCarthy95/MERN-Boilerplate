const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const Config = require("./config")

module.exports = {
  devtool: "eval-source-map",
  entry: [
    "babel-polyfill",
    path.join(__dirname, "../app/index")
  ],
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, path.join(__dirname, "../dist")),
    filename: "bundle.js",
    compress: true,
    port: 3000,
    stats: "errors-only",
    open: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: Config.APP_NAME.toString(),
      hash: true,
      template: path.join(__dirname, "/index-template.html"),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunckFilename: "[id].[hash].css"
    })
  ],
  externals: {
    "Config": JSON.stringify(Config)
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
}
