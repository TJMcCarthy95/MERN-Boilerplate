module.exports = Object.assign(
  require("./default.js"),
  process.env.NODE_ENV === "production"
    ? require("./production.js")
    : require("./development.js")
);
