import { Button, Card, Collapse, DatePicker, Divider, message, Steps } from "antd";
import Axios from "axios";
import * as moment from "moment";
import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Step = Steps.Step;
const Panel = Collapse.Panel;

class Order extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      time: "",
      nextTime: "",
      car: "",
      price: 0,
      carDetails: [
        {
          zws: ""
        }
      ]
    };
  }

  public componentWillMount() {
    Axios.get("http://localhost:8083/car/" + this.props.match.params.id, {
      headers: {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: localStorage.getItem("Authorization")
        }
      }
    }).then(res => {
      if (res.data.code === 200) {
        let a = 0;
        switch (this.props.match.params.time) {
          case "shortTime":
            a = res.data.data.price[0].shortTime * 2;
            break;
          case "workday":
            a = res.data.data.price[0].workday;
            break;
          case "week":
            a = res.data.data.price[0].week;
            break;
          case "month":
            a = res.data.data.price[0].month;
            break;
          case "year":
            a = res.data.data.price[0].year;
            break;
          default:
            break;
        }
        this.setState({
          car: res.data.data,
          carDetails: res.data.data.carDetails,
          price: a
        });
      }
    });
  }

  public render() {
    return (
      <div>
        <Header />
        <Steps current={1} style={{ marginTop: 20 }}>
          <Step title="Finished" description="选择车辆" />
          <Step title="In Progress" description="确认订单" />
          <Step title="Waiting" description="订单成功" />
        </Steps>
        <div style={{ marginLeft: "15%", marginRight: "auto" }}>
          <div style={{ display: "flex" }}>
            <Card
              title={this.state.car.name}
              bordered={true}
              style={{ width: 500, marginTop: 20 }}
            >
              <img
                style={{ width: 200, height: 124 }}
                src={this.state.car.picture}
              />
              <a href={"#/cardetail/" + this.state.car.id}>
                {"三厢|1.5自动|乘坐" + this.state.carDetails[0].zws + "人"}
              </a>
            </Card>
            <Card
              title={"时间"}
              bordered={true}
              style={{ width: 500, marginTop: 20 }}
            >
              取车时间：
              <br />
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={this.disabledDate}
                disabledTime={this.disabledDateTime}
                onChange={value => {
                  this.time(value);
                }}
                onOk={() => this.next()}
                showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
              />
              <br />
              还车时间：
              <br />
              {this.state.nextTime}
            </Card>
          </div>
          <Card
            title={"费用明细"}
            bordered={true}
            style={{ width: 1000, marginTop: 20 }}
          >
            <div style={{ display: "flex" }}>
              <p>车辆租赁及服务费</p>
              <p style={{ marginLeft: "auto" }}>￥{this.state.price}</p>
            </div>
            <Divider />
            <Collapse accordion={true} activeKey={"1"}>
              <Panel header="其他费用" key="1">
                <div style={{ display: "flex" }}>
                  <p>车辆整备费</p>
                  <p style={{ marginLeft: "auto" }}>￥20</p>
                </div>
              </Panel>
            </Collapse>
            <Divider />
            <div style={{ display: "flex" }}>
              <p>合计</p>
              <p style={{ marginLeft: "auto" }}>￥{this.state.price + 20}</p>
            </div>
          </Card>
          <Button
            type="primary"
            style={{ marginLeft: "900px", marginTop: 20 }}
            onClick={() => this.submit()}
          >
            提交订单
          </Button>
        </div>
        <Divider />
        <Footer />
      </div>
    );
  }

  private disabledDate(current: any) {
    return current && current < moment().endOf("day");
  }

  private disabledDateTime() {
    return {
      disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 22, 23],
      disabledMinutes: () => [
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59
      ],
      disabledSeconds: () => [55, 56]
    };
  }

  private time(value: any) {
    this.setState({
      time: value
    });
  }

  private next() {
    const a = this.state.time;
    const b = new Date(a.format("YYYY-MM-DD, h:mm:ss"));
    switch (this.props.match.params.time) {
      case "shortTime":
        b.setDate(b.getDate() + 2);
        break;
      case "workday":
        b.setDate(b.getDate() + 4);
        break;
      case "week":
        b.setDate(b.getDate() + 7);
        break;
      case "month":
        b.setMonth(b.getMonth() + 1);
        break;
      case "year":
        b.setFullYear(b.getFullYear() + 1);
        break;
      default:
        b.setDate(b.getDate() + 2);
        break;
    }
    const c = moment(b).format("YYYY-MM-DD, h:mm:ss");
    this.setState({
      time: a.format("YYYY-MM-DD, h:mm:ss"),
      nextTime: c
    });
  }

  private submit() {
    if (this.state.time === "") {
      message.warning("请选择取车时间");
    } else {
      const params = {
        cid: this.props.match.params.id,
        getTime: this.state.time,
        returnTime: this.state.nextTime,
        price: this.state.price
      };
      Axios.post("http://localhost:8083/order/reserve", params, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: localStorage.getItem("Authorization")
        }
      }).then(res => {
        if (res.data.code === 200) {
          window.location.href = "#/success/" + res.data.data;
        }
      });
    }
  }
}

export default Order;
