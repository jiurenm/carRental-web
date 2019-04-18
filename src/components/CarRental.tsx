import { Divider } from "antd";
import * as React from "react";
import CarList from "./CarList";
import Footer from "./Footer";
import Header from "./Header";

class CarRental extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: "5%", marginLeft: "10%", marginRight: "10%" }}>
          <CarList />
        </div>
        <Divider />
        <Footer />
      </div>
    );
  }
}

export default CarRental;
