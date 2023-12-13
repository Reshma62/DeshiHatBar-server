const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDes: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Boolean,
    },
    discountPrice: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
    star: {
      type: String,
    },
    stock: {
      type: Boolean,
    },
    remark: {
      type: String,
    },
    categoryID: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
    brandID: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", DataSchema);
module.exports = Product;
