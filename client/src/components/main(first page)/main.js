import "./main.css";
import { React } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div class="container-fluid mainDiv">
      <div class="container topic">
        <h1>Delivery updates </h1>
      </div>

      <div className="main d-flex justify-content-center align-items-center ">
        <div className="btn_group container ">
          <Link
            className="btn btn-xl border-warning btn-dark btn-select"
            to="/login"
          >
            <h3>Sign IN</h3>
          </Link>
          <Link
            className="btn btn-xl border-warning btn-dark btn-select"
            to="/register"
          >
            <h3> Sign UP </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
