const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  orderID: String,
  shippingID: String,
  date: String,
  current_city: String,
  status: String,
})

module.exports = mongoose.model('delivery_updates', userSchema)