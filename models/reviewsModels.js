const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});
const Review = mongoose.model("Review", DataSchema);
module.exports = Review;
