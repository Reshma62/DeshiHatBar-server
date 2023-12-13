const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    cus_add: {
      type: String,
      required: true,
    },
    cus_city: {
      type: String,
      required: true,
    },
    cus_country: {
      type: String,
      required: true,
    },
    cus_fax: {
      type: String,
    },
    cus_name: {
      type: String,
      required: true,
    },
    cus_phone: {
      type: String,
      required: true,
    },
    cus_postcode: {
      type: String,
      required: true,
    },
    cus_state: {
      type: String,
      required: true,
    },
    ship_add: {
      type: String,
      required: true,
    },
    ship_city: {
      type: String,
      required: true,
    },
    ship_country: {
      type: String,
      required: true,
    },
    ship_name: {
      type: String,
      required: true,
    },
    ship_phone: {
      type: String,
      required: true,
    },
    ship_postcode: {
      type: String,
      required: true,
    },
    ship_state: {
      type: String,
      required: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Profile = mongoose.model("Profile", DataSchema);
module.exports = Profile;
