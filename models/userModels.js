const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
});
const User = mongoose.model("User", DataSchema);
module.exports = User;
