const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    store_id: {
      type: String,
    },
    store_passwd: {
      type: String,
    },

    currency: {
      type: String,
    },
    success_url: {
      type: String,
    },
    fail_url: {
      type: String,
    },

    cancel_url: {
      type: String,
    },
    ipn_url: {
      type: String,
    },
    init_url: {
      type: String,
    },
  },
  { timestamps: true }
);
const PaymentSetting = mongoose.model("PaymentSetting", DataSchema);
module.exports = PaymentSetting;
