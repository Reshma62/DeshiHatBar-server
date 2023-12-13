const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productID: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    color: {
      type: String,
    },
    qty: {
      type: Number,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Cart = mongoose.model("Cart", DataSchema);
module.exports = Cart;
