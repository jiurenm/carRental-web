import * as React from "react";
import axios from "axios";

import { Carousel, Divider, Card, Button, Modal } from "antd";

import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./Login";

class Details extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      car: [],
      carDetails: [
        {
          zws: "",
          cms: "",
          rllx: "",
          bsxlx: "",
          pl: "",
          ry: "",
          qdfs: "",
          fdjjqxs: "",
          tc: "",
          yxrl: "",
          yx: "",
          zy: "",
          dcld: "",
          qn: "",
          dvd: "",
          gps: ""
        }
      ],
      pictures: [],
      id: this.props.match.params.id,
      loginVisible: false
    };
  }

  public componentWillMount() {
    const url = "http://localhost:8083/car/" + this.state.id;
    axios
      .get(url)
      .then(res => {
        if (res.data.code === 200) {
          this.setState({
            car: res.data.data,
            carDetails: res.data.data.carDetails,
            pictures: res.data.data.pic
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
        <Divider />
        <Carousel vertical={true} autoplay={true}>
          {this.state.pictures.map((pic: any) => (
            <div key={pic.id}>
              <img src={pic.url} key={pic.id} />
            </div>
          ))}
        </Carousel>
        <Divider />
        <Card title="基本信息" style={{ width: 500, marginLeft: "30%" }}>
          <div style={{ display: "-webkit-box" }}>
            <p>品 牌：{this.state.car.pp}</p>
            <p style={{ marginLeft: "30%" }}>车 系：{this.state.car.cx}</p>
          </div>
          <div style={{ display: "-webkit-box" }}>
            <p>年 代 款：{this.state.car.ndk}</p>
            <p style={{ marginLeft: "30%" }}>配 置 款：{this.state.car.pzk}</p>
          </div>
        </Card>
        <Card title="配置信息" style={{ width: 500, marginLeft: "30%" }}>
          <div style={{ display: "-webkit-box" }}>
            <p>座 位 数：{this.state.carDetails[0].zws}</p>
            <p style={{ marginLeft: "36%" }}>
              车 门 数：{this.state.carDetails[0].cms}
            </p>
          </div>
          <div style={{ display: "-webkit-box" }}>
            <p>燃料类型：{this.state.carDetails[0].rllx}</p>
            <p style={{ marginLeft: "30%" }}>
              变速箱类型：{this.state.carDetails[0].bsxlx}
            </p>
          </div>
          <div style={{ display: "-webkit-box" }}>
            <p>排 量：{this.state.carDetails[0].pl}</p>
            <p style={{ marginLeft: "36%" }}>
              燃油标号：{this.state.carDetails[0].ry}
            </p>
          </div>
          <div style={{ display: "-webkit-box" }}>
            <p>驱动方式：{this.state.carDetails[0].qdfs}</p>
            <p style={{ marginLeft: "30%" }}>
              发动机进气形式：{this.state.carDetails[0].fdjjqxs}
            </p>
          </div>
          <div style={{ display: "-webkit-box" }}>
            <p>天 窗：{this.state.carDetails[0].tc}</p>
            <p style={{ marginLeft: "30%" }}>
              油箱容量：{this.state.carDetails[0].yxrl}
            </p>
          </div>
          <div style={{ display: "-webkit-box" }}>
            <p>音 箱：{this.state.carDetails[0].yx}</p>
            <p style={{ marginLeft: "40%" }}>
              坐 椅：{this.state.carDetails[0].zy}
            </p>
          </div>
          <div style={{ display: "-webkit-box" }}>
            <p>倒车雷达：{this.state.carDetails[0].dcld}</p>
            <p style={{ marginLeft: "34%" }}>
              气 囊：{this.state.carDetails[0].qn}
            </p>
          </div>
          <div style={{ display: "-webkit-box" }}>
            <p>DVD/CD：{this.state.carDetails[0].dvd}</p>
            <p style={{ marginLeft: "34%" }}>
              GPS导航：{this.state.carDetails[0].gps}
            </p>
          </div>
        </Card>
        <Button
          style={{ marginTop: "3%", marginLeft: "40%" }}
          type="primary"
          shape="round"
          size={"large"}
          onClick={() => this.yuding()}
        >
          立即预定
        </Button>
        <Divider />
        <Footer />

        <Modal
          title="登录"
          visible={this.state.loginVisible}
          onCancel={this.handleCancel}
        >
          <LoginForm />
        </Modal>
      </div>
    );
  }

  private yuding() {
    if (window.localStorage.getItem("Authorization") !== null) {
      window.location.href="#/order/shortTime/" + this.props.match.params.id
    } else {
      this.setState({
        loginVisible: true
      });
    }
  }

  private handleCancel = () => {
    this.setState({
      loginVisible: false
    });
  };
}

export default Details;
