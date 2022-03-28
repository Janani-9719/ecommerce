import { useEffect, useState } from "react";
import "./homePage.css";
import CurrencyNav from "../currencyNav/currecy";
import axios from "axios";

import { Link } from "react-router-dom";
import Table from "./Table";
const HomePage = () => {
  const [obj, setobj] = useState({
    orderID: " ",
    description: " ",
    qty: " ",
    deliver_address: " ",
    d_city: " ",
    shop_address: " ",
  });

  const [orderID, setOrderId] = useState(" ");

  useEffect(() => {
    console.log(orderID);
    axios.get(`http://localhost:4000/user/check1/${orderID}`).then((res) => {
      console.log(res.data);
      res.data == "not found" ? console.log("not found") : setobj(res.data);
    });
  }, [orderID]);

  return (
    <>
      <div className="container div1">
        <div class="orderDetailsDiv">
          <div class="row">
            <h3>Order Details</h3>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>Order ID</label>
              <input
                type="text"
                class="form-control "
                id="orderID"
                placeholder="Order ID"
                onChange={(e) => {
                  setOrderId(e.target.value);
                }}
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>Description</label>
              <input
                type="text"
                class="form-control "
                id="desc"
                placeholder="Description"
                disabled={true}
                value={obj.description}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>Quantity</label>
              <input
                type="text"
                class="form-control "
                id="qty"
                placeholder="Quantity"
                disabled={true}
                value={obj.qty}
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>Address Line 1</label>
              <input
                type="text"
                class="form-control "
                id="address"
                placeholder="Address Line 1"
                disabled={true}
                value={obj.deliver_address}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>City</label>
              <input
                type="text"
                class="form-control "
                id="qty"
                placeholder="City"
                disabled={true}
                value={obj.d_city}
              />
            </div>
            {/* <div class="col-lg-6 col-md-6 col-xs-12">
            <label>Country</label>
            <input type="text" class="form-control " id="address" placeholder="Country"/>
            </div> */}
          </div>
          {/* <div class="row">
            <Link
              to="/Table"
              className="button"
              style={{ textDecoration: "none" }}
            >
              <span className="linking">Add order</span>
            </Link>
          </div>
        </div>
        <div> */}
          {/* <button class="btn primary-btn prograss-btn">Check prograss</button> */}
        </div>
        <Table orderID={orderID} />
      </div>
    </>
  );
};
export default HomePage;
