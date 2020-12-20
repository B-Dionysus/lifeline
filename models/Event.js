const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  userId: {type: String, required:true},
  startDate:{type: Date, required:true},
  endDate: Date,
  desc: String,
  title:{type: String, required:true},
  tags:[String],
  private: Boolean
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
