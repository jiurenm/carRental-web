import { BackTop, Card, Carousel, Col, Divider, Row } from "antd";
import axios from "axios";
import * as React from "react";
import * as styles from "../css/public.css";
import Footer from "./Footer";
import Header from "./Header";

/// <reference path="../interfaces.d.ts"/>

const { Meta } = Card;

export class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      car: [],
      carousel: [{
        id: '',
        href: '',
        src: ''
      }]
    };
  }

  public componentWillMount() {
    axios
      .get("http://47.102.210.246:8083/car/")
      .then(res => {
        if (res.data.code === 200) {
          axios
      .get("http://47.102.210.246:8081/carousel/list")
      .then(res1 => {
        if (res1.data.code === 200) {
          this.setState({
            car: res.data.data,
            carousel: res1.data.data
          });
          console.log(this.state.carousel)
        }
      })
      .catch(err => {
        console.log(err);
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
          {
            this.state.carousel.map((e:any) => (
                <div>
                  <a href={e.href}>
                    <img src={e.src} />
                  </a>
                </div>
            ))
          }
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
                  <img
                    style={{ width: 200, height: 124 }}
                    src={element.picture}
                  />
                  <a href={"#/cardetail/" + element.id}>
                    {"三厢|1.5自动|乘坐" + element.carDetails[0].zws + "人"}
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
          <Row gutter={16} style={{ marginTop: 10 }}>
            {this.state.car.slice(3, 6).map((element: any) => (
              <Col span={8} key={element.id}>
                <Card title={element.name} bordered={false}>
                  <img
                    style={{ width: 200, height: 124 }}
                    src={element.picture}
                  />
                  <a href={"#/cardetail/" + element.id}>
                    {"三厢|1.5自动|乘坐" + element.carDetails[0].zws + "人"}
                  </a>
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
