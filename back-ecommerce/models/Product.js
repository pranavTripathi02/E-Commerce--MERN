const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    // required: true,
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
    type: Array,
    required: true,
  },
  discounted_price: {
    type: Number,
  },
  product_category: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
