const Brand = require("../models/brandsModel");
const Categories = require("../models/categoriesModel");
const Product = require("../models/productModels");
const ProductBrandLists = async (req, res) => {
  const result = await Brand.find({});
  res.send(result);
};
const ProductCategoryLists = async (req, res) => {
    const result = await Categories.find({});
    res.send(result);
};
const ProductSliderList = async (req, res) => {};
const ProductByBrands = async (req, res) => {
  const productId = req?.params?.brand;

  const result = await Product.find(
    {
      brandID: productId,
    },
    { createdAt: 0 }
  )
    .populate("brandID")
    .populate("categoryID");
  res.send(result);
};
const ProductByCategory = async (req, res) => {
  const productId = req?.params?.cateId;

  const result = await Product.find(
    {
      categoryID: productId,
    },
    { createdAt: 0 }
  )
    .populate("categoryID")
    .populate("brandID");
  res.send(result);
};
const ProductBySimilar = async (req, res) => {};
const ProductByKeyword = async (req, res) => {};
const ProductByRemark = async (req, res) => {};
const ProductDetails = async (req, res) => {};
const ProductReview = async (req, res) => {};

module.exports = {
  ProductByBrands,
  ProductByCategory,
  ProductBrandLists,
  ProductCategoryLists,
  ProductSliderList,
  ProductBySimilar,
  ProductByKeyword,
  ProductReview,
  ProductDetails,
  ProductByRemark,
};
