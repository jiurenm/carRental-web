import * as React from "react";
import { Divider, Carousel, BackTop, Card, Col, Row } from "antd";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";

import * as styles from "../css/public.css";

/// <reference path="../interfaces.d.ts"/>

const { Meta } = Card;

export class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      car: []
    };
  }

  public componentWillMount() {
    axios
      .get("http://localhost:8083/car/")
      .then(res => {
        if (res.data.code === 200) {
          this.setState({
            car: res.data.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  public render() {
    return (
      <div>
        <Header />
        <div>
          <Carousel autoplay={true} className={styles.carcousel}>
            <div>
              <a href="#/register">
                <img src="//files.1hai.cn/group72/M00/65/CE/rBQFIFvb_VOAOPmDAAJT_SGA7i8728.jpg" />
              </a>
            </div>
            <div>
              <a href="#/car">
                <img src="//fimg.zuchecdn.com/upload/web/HomePage/HeadFigure/2018/2560x500-guojizuche-180201-web.jpg" />
              </a>
            </div>
            <div>
              <a href="//www.tmall.com">
                <img src="//i.loli.net/2019/02/25/5c7380633082d.jpg" />
              </a>
            </div>
          </Carousel>
        </div>
        <div
          style={{
            display: "-webkit-box",
            marginTop: "5%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center"
          }}
        >
          <Card
            style={{ width: 200, marginLeft: "10%" }}
            cover={
              <a href="#/car">
                <img
                  style={{ width: 198, height: 247 }}
                  alt="example"
                  src="https://i.loli.net/2019/03/31/5ca0aca5116ce.png"
                />
              </a>
            }
          >
            <Meta title="短租自驾" description="" />
          </Card>
          <Card
            style={{ width: 200, marginLeft: "10%" }}
            cover={
              <a href="#/car">
                <img
                  style={{ width: 198, height: 247 }}
                  alt="example"
                  src="https://i.loli.net/2019/03/31/5ca0ad3a2cf9a.png"
                />
              </a>
            }
          >
            <Meta title="长租服务" description="" />
          </Card>
          <Card
            style={{ width: 200, marginLeft: "10%" }}
            cover={
              <a href="#/car">
                <img
                  style={{ width: 198, height: 247 }}
                  alt="example"
                  src="https://i.loli.net/2019/03/31/5ca0ad514ef12.png"
                />
              </a>
            }
          >
            <Meta title="企业服务" description="" />
          </Card>
          <Card
            style={{ width: 200, marginLeft: "10%" }}
            cover={
              <a href="#/car">
                <img
                  style={{ width: 198, height: 247 }}
                  alt="example"
                  src="https://i.loli.net/2019/03/31/5ca0ad929e6b6.png"
                />
              </a>
            }
          >
            <Meta title="年租套餐" description="" />
          </Card>
        </div>
        <div className={styles.hot}>
          <h1>热门车型</h1>
        </div>
        <Divider />
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Row gutter={16}>
            {this.state.car.slice(0, 3).map((element: any) => (
              <Col span={8} key={element.id}>
              <Card title={element.name} bordered={false}>
                <img style={{ width: 200, height: 124 }} src={ element.picture }/>
                <a href={ "#/cardetail/" + element.id }>{ "三厢|1.5自动|乘坐" + element.carDetails[0].zws + "人" }</a>
              </Card>
            </Col>
            ))}
          </Row>
          <Row gutter={16} style={{ marginTop: 10 }}>
            {this.state.car.slice(3, 6).map((element: any) => (
              <Col span={8} key={element.id}>
              <Card title={element.name} bordered={false}>
                <img style={{ width: 200, height: 124 }} src={ element.picture }/>
                <a href={ "#/cardetail/" + element.id }>{ "三厢|1.5自动|乘坐" + element.carDetails[0].zws + "人" }</a>
              </Card>
            </Col>
            ))}
          </Row>
        </div>
        <Divider />
        <Footer />
        <div>
          <BackTop />
        </div>
      </div>
    );
  }
}
