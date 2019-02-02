let colors = require("colors");

colors.setTheme({
  info: "green",
  log: "blue",
  error: "red",
  exception: "grey",
  debug: "cyan",
  warn: "yellow",
});

const log = (level, message) => console[level](`[${level.toUpperCase()}] ${new Date()}`[level].bold.underline, `-- ${message}`[level].bold);

module.exports = {
  info: (message) => log("info", message),
  log: (message) => log("log", message),
  error: (message) => log("error", message),
  exception: (message) => log("exception", message),
  debug: (message) => log("debug", message),
  warn: (message) => log("warn", message)
};
