const CleanWebpackPlugin = require('clean-webpack-plugin')
const constants = require("./webpack.constants.js");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: [
      "babel-polyfill",
      constants.paths.entry
    ],
    actions: constants.paths.actions,
    reducers: constants.paths.reducers,
  },
  output: {
    path: constants.paths.output,
    filename: "[name].[hash].bundle.js",
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
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: constants.configs.common.appName.toString(),
      hash: true,
      template: constants.paths.template,
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunckFilename: "[id].[hash].css"
    }),
    new FaviconsWebpackPlugin({
      logo: constants.paths.logo,
      title: constants.configs.common.appName.toString(),
      inject: true
    }),
    new CleanWebpackPlugin([
      constants.paths.output
    ], {
      root: constants.paths.root
    })
  ]
}
