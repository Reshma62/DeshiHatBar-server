const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
      required: true,
    },
    img4: {
      type: String,
      required: true,
    },
    img5: {
      type: String,
    },
    img6: {
      type: String,
    },
    img7: {
      type: String,
    },
    img8: {
      type: String,
    },

    des: {
      type: String,
    },
    color: {
      type: Boolean,
    },
    size: {
      type: String,
    },
    productID: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);
const ProductDetails = mongoose.model("ProductDetails", DataSchema);
module.exports = ProductDetails;
