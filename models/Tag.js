const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  userId: {type: String, required:true},
  tag:{type: String, required:true},
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
