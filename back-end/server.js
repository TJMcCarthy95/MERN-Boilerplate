const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const Logger = require("./utils").Logger;
const Config = require("./config");
const cors = require("cors");
const app = express();

const {
  NODE_ENV = "default",
  PORT = Config.port
} = process.env;


// Server Config
const corsOptions = {
  origin: (origin, done) => {
    Config.whitelist.indexOf(origin) !== -1 || !origin
      ? done(null, true)
      : done(new Error("Not allwed by CORS"))
  },
  methods: "GET,PUT,POST,DELETE",
  optionsSuccessStatus: 200
};

// Bodyparser Middleware
app.use(
  cors(corsOptions),
  bodyParser.json()
);

// Connect to Mongo
mongoose
  .connect(Config.mongoURI)
  .then(() => Logger.info(`MongoDB connected to ${Config.mongoURI}`))
  .catch(err => Logger.error(`MongoDB couldn't connect to ${Config.mongoURI}\n${err}`));


// Use Routes
app.get("/", (req, res) => res.send("API Running!")); // Home Landing page
app.use("/api/packages", require("./routes/api/packages"));

// Serve static assets for production
if(NODE_ENV === "production"){
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => Logger.log(`${Config.appName} started on port ${PORT}`));
