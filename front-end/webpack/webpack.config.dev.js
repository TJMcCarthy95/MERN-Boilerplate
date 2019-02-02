const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const constants = require("./webpack.constants.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: constants.paths.output,
    filename: "bundle.js",
    compress: true,
    port: 3000,
    stats: "errors-only",
    open: false,
  },
  externals: {
    "Config": JSON.stringify(merge(constants.configs.common, constants.configs.development))
  }
})
