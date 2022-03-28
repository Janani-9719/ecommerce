const express = require('express')
const delivertRouts = express.Router()
const Delivery = require('../models/deliver_updates')

delivertRouts.post('/add', async (req, res) => {
 const user = new Delivery(req.body)

  // const check = await Order.findOne({ company_email: user.company_email })
  // if (check == null) {
    user
      .save()
      .then((result) => {
        console.log(result)
        res.json('successfull')
      })
      .catch((err) => console.log(err))
  // } else {
    // res.json('already registered')
  // }
})


delivertRouts.get('/checkUpdate/:order_ID', async (req, res) => {
  const findId = await Delivery.find({
    orderID: req.params.order_ID,
    //admin_password: req.params.password,
  })

  res.send(findId?findId:"not found")
})

module.exports = delivertRouts
