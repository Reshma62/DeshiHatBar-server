const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    payable: {
      type: String,
    },
    cus_details: {
      type: Number,
    },
    ship_details: {
      type: String,
    },
    tran_id: {
      type: String,
    },
    val_id: {
      type: String,
    },
    delivery_status: {
      type: String,
    },
    payment_status: {
      type: String,
    },
  
    total: {
      type: String,
    },
    vat: {
      type: String,
    },
  },
  { timestamps: true }
);
const Invoices = mongoose.model("Invoices", DataSchema);
module.exports = Invoices;
