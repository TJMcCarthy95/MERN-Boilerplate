const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PackageSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  homePage: String
});

module.exports = Package = mongoose.model("package", PackageSchema);
