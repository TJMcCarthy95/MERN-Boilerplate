const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.config.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const constants = require("./webpack.constants.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  stats: {
    colors: true,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: "react",
          chunks: "all",
          enforce: true
        },
        redux: {
          test: /[\\/]node_modules[\\/]((redux).*)[\\/]/,
          name: "redux",
          chunks: "all",
          enforce: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]((!(react|redux)).*)[\\/]/,
          name: "vendor",
          chunks: "all",
          enforce: true
        },
        actions: {
          test: /[\\/]app[\\/]actions[\\/]*\.(js|jsx)$/,
          name: "actions",
          chunks: "all",
          enforce: true
        },
        reducers: {
          test: /[\\/]app[\\/]reducers[\\/]*\.(js|jsx)$/,
          name: "reducers",
          chunks: "all",
          enforce: true
        },
        styles: {
          test: /\.css$/,
          name: "styles",
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
    }),
  ],
  externals: {
    "Config": JSON.stringify(merge(constants.configs.common, constants.configs.production))
  }
});
