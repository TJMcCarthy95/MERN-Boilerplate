const path = require("path");

const paths = {
  entry: path.join(__dirname, "../app/index"),
  output: path.join(__dirname, "../dist"),
  template: path.join(__dirname, "index-template.html"),
  root: path.join(__dirname, "../"),
  logo: path.join(__dirname, "../app/assets/images/logo.png"),
  actions: path.join(__dirname, "../app/actions/webpack.actions.js"),
  reducers: path.join(__dirname, "../app/reducers/webpack.reducers.js"),
  configs: {
    common: path.join(__dirname, "../configs/common.js"),
    development: path.join(__dirname, "../configs/development.js"),
    production: path.join(__dirname, "../configs/production.js")
  }
};

const configs = {
  common: require(paths.configs.common),
  development: require(paths.configs.development),
  production: require(paths.configs.production)
};

module.exports = {
  paths,
  configs
}
