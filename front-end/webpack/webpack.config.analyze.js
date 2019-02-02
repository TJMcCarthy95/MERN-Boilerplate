const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require("webpack-merge");

module.exports = merge(require("./webpack.config.prod"), {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});
