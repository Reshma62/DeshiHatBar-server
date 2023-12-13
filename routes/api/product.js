const express = require("express");
const {
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
} = require("../../controller/ProductController");
const _ = express.Router();
_.get("/ProductBrandLists", ProductBrandLists);
_.get("/ProductByCategory/:cateId", ProductByCategory);
_.get("/ProductByBrands/:brand", ProductByBrands);
_.get("/ProductCategoryLists", ProductCategoryLists);
_.get("/ProductSliderList", ProductSliderList);
_.get("/ProductBySimilar/:keyword", ProductBySimilar);
_.get("/ProductByKeyword/:keyword", ProductByKeyword);
_.get("/ProductByRemark/:remark", ProductByRemark);
_.get("/ProductDetails/:productID", ProductDetails);
_.get("/ProductReview/:productID", ProductReview);
module.exports = _;
