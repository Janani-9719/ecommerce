import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomePage from "../homePage/homePage";
import NewOrders from "../newOrders/newOrders";
//import Login from '../login/login'
import { useHistory } from "react-router";
//import CreateRepaort from "../createReport/createRepaort";

const MainNav = () => {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const bodyPage = (a) => {
    if (a === 0) {
      return <HomePage />;
    } else if (a === 1) {
      return <NewOrders />;
    } else if (a === 2) {
      history.push("/login");
    }
  };
  return (
    <div>
      <Paper
        square
        className="bg-primary d-flex justify-content-end border-warning"
      >
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab
            label="Tracking Updates"
            className="text-light btn btn-primary"
          />
          <Tab label="New Orders" className="text-light btn btn-primary" />
          <Tab label="LOGOUT" className="btn btn-danger text-light" />
        </Tabs>
      </Paper>
      <div>{bodyPage(value)}</div>
    </div>
  );
};

export default MainNav;
