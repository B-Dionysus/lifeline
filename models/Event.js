const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  userId: {type: Number, required:true},
  startData:{type: Number, required:true},
  endDate: Number,
  desc: String,
  title: String,
  briefTitle:{type: String, required:true},
  tags:[String],
  private: Boolean
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
