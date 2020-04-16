const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    sub_title: { type: String, required: true },
  },
  { timestamps: true}
)

module.exports = mongoose.model('products', Product)