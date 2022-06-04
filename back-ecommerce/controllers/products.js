const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  // const {product_name, product_price, product_rating, product_img, product_discount, product_category} = req
  const { product_rating, product_discount, product_category, brand } =
    req.query;
  const queryObj = {};
  if (product_category) queryObj.product_category = product_category;
  if (brand) queryObj.brand = brand;
  if (product_discount) queryObj.product_discount = { $gte: product_discount };
  if (product_rating) queryObj.product_rating = { $gte: product_rating };
  console.log(queryObj);
  const products = await Product.find(queryObj);
  if (!products) throw NotFoundError('No products found in DB');
  res.status(StatusCodes.OK).json({ products });
};

module.exports = getAllProducts;
