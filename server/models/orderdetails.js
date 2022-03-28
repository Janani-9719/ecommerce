const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  orderID: String,
  description: String,
  qty: String,
  deliver_address: String,
  d_city: String,
  shop_address: String
})

module.exports = mongoose.model('Orders', userSchema)
