const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  notifications: Array,
});

const Model = mongoose.model("employer", schema);
module.exports = Model;
