const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  product_rating: {
    type: Number,
    required: true,
  },
  product_img: {
    type: String,
    required: true,
  },
  discounted_price: {
    type: Number,
  },
  product_category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
