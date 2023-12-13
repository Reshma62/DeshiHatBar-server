const express = require("express");
const _ = express.Router();
const User = require("./user");
const Auth = require("./auth");
const Product = require("./product");
_.use("/user", User);
_.use("/auth", Auth);
_.use("/auth", Product);
module.exports = _;
