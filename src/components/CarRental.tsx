import * as React from "react";
import { Divider } from "antd"

import Header from "./Header"
import Footer from "./Footer"
import CarList from "./CarList"

class CarRental extends React.Component {
    public render() {
        return (
            <div>
                <Header/>
                <div style={{ marginTop:"5%",marginLeft:"10%",marginRight:"10%" }}>
                    <CarList/>
                </div>
                <Divider/>
                <Footer/>
            </div>
        )
    }
}

export default CarRental;