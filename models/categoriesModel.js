const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataSchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Categories = mongoose.model("Categories", DataSchema);
module.exports = Categories;
