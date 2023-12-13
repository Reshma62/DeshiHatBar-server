const mongoose = require('mongoose');
const { Schema } = mongoose;
const brandSchema = new Schema(
  {
    brandName: {
      type: String,
      required: true,
    },
    brandImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;