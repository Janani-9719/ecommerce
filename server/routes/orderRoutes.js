const express = require("express");
const orderRoutes = express.Router();
const Order = require("../models/orderdetails");

orderRoutes.post("/add", async (req, res) => {
  const user = new Order(req.body);

  // const check = await Order.findOne({ company_email: user.company_email })
  // if (check == null) {
  user
    .save()
    .then((result) => {
      console.log(result);
      res.json("successfully registered");
    })
    .catch((err) => console.log(err));
  // } else {
  // res.json('already registered')
  // }
});

orderRoutes.get("/check1/:order_ID", async (req, res) => {
  const findId = await Order.findOne({
    orderID: req.params.order_ID,
    //admin_password: req.params.password,
  });

  res.send(findId ? findId : "not found");
});

module.exports = orderRoutes;
