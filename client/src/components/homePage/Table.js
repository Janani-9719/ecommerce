import axios from "axios";
import { useEffect, useState } from "react";

const Table = (props) => {
  const [obj, setobj] = useState("");

  const [orderID, getOrders] = useState(props.orderID);
  console.log(orderID);

  useEffect(() => {
    axios
      .get("http://localhost:4000/delivery/checkUpdate/" + props.orderID)
      .then((res) => {
        //window.alert(res.data);
        console.log(res.data);
        res.data == "not found" ? console.log("not found") : setobj(res.data);
      });
  }, [props.orderID]);

  return (
    <div className="container div1">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Shipping ID</th>
            <th scope="col">Date</th>
            <th scope="col">Current City</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {obj.length > 0 &&
            obj.map((order) => {
              return (
                <tr>
                  <td>{order.orderID}</td>
                  <td>{order.ShippingID}</td>
                  <td>{order.date}</td>
                  <td>{order.current_city}</td>
                  <td>{order.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
