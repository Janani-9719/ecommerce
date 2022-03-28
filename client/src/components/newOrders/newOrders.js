import axios from "axios";
import { useEffect, useState } from "react";
import "./orders.css";
import { Link } from "react-router-dom";

const onSubmit = () => {
  const obj = {};
};
const newOrders = () => {
  return (
    <>
      <div className="container">
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
                  // setOrderId(e.target.value);
                }}
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>Shipping ID</label>
              <input
                type="text"
                class="form-control "
                id="desc"
                // placeholder="Description"
                disabled={true}
                // onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>Date</label>
              <input
                type="text"
                class="form-control "
                id="qty"
                // placeholder="Quantity"
                disabled={true}
                // value={obj.qty}
              />
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>Current City</label>
              <input
                type="text"
                class="form-control "
                id="address"
                placeholder="Current City"
                disabled={true}
                // value={obj.deliver_address}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-xs-12">
              <label>Status</label>
              <input
                type="text"
                class="form-control "
                id="qty"
                placeholder="Status"
                disabled={true}
                // value={obj.d_city}
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
          </div> */}
        </div>
        <div>
          <button class="btn primary-btn prograss-btn">Add Update</button>
        </div>
        {/* <Table orderID={orderID} /> */}
      </div>
    </>
  );
};
export default newOrders;
