const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  itemName: String,
  itemDescription: String
});

module.exports = mongoose.model("Todo", todoSchema);
