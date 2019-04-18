import { Button, Card, message, Modal, Steps } from "antd";
import Axios from "axios";
import * as React from "react";
import Header from "./Header";

const Step = Steps.Step;
const confirm = Modal.confirm;

class Success extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      title: "预定成功",
      status: "立即支付",
      order: {
        id: "",
        getTime: "",
        returnTime: "",
        price: "",
        number: ""
      }
    };
  }

  public componentWillMount() {
    Axios.get(
      "http://localhost:8083/order/info/" + this.props.match.params.id,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: localStorage.getItem("Authorization")
        }
      }
    ).then(res => {
      if (res.data.code === 200) {
        Axios.get("http://localhost:8083/order/number/" + res.data.data.vid, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: localStorage.getItem("Authorization")
          }
        }).then(response => {
          if (response.data.code === 200) {
            this.setState({
              order: {
                id: res.data.data.id,
                getTime: res.data.data.getTime,
                returnTime: res.data.data.returnTime,
                price: res.data.data.price,
                number: response.data.data.number
              }
            });
          }
        });
      }
    });
  }

  public render() {
    return (
      <div>
        <Header />
        <Steps current={2} style={{ marginTop: 20 }}>
          <Step title="Finished" description="选择车辆" />
          <Step title="In Progress" description="确认订单" />
          <Step title="Waiting" description="订单成功" />
        </Steps>
        <div>
          <Card
            title={this.state.title}
            style={{
              width: 500,
              marginTop: 20,
              height: 400,
              marginLeft: "35%"
            }}
            headStyle={{ textAlign: "center" }}
            bodyStyle={{ textAlign: "center" }}
          >
            <p>取车时间: {this.state.order.getTime}</p>
            <p>还车时间: {this.state.order.returnTime}</p>
            <p>费用合计: {this.state.order.price}</p>
            <p>预定车牌: {this.state.order.number}</p>
            <p style={{ marginTop: 50 }}>
              <Button
                type="primary"
                onClick={() => {
                  this.showConfirm(this.state.order.id);
                }}
              >
                {this.state.status}
              </Button>
              <Button style={{ marginLeft: 5 }} type="danger">
                取消订单
              </Button>
            </p>
          </Card>
        </div>
      </div>
    );
  }

  private showConfirm(e: any) {
    confirm({
      title: "支付",
      content: (
        <p>
          <img
            src="https://i.loli.net/2019/04/09/5cacba762f6ee.png"
            style={{ width: 314, height: 390 }}
          />
        </p>
      ),
      onOk() {
        Axios.get("http://localhost:8083/order/pay/" + e, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: localStorage.getItem("Authorization")
          }
        }).then(res => {
          if (res.data.code === 200) {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              message.info("支付成功");
              window.location.href = "#/account";
            }).catch(() => console.log("Oops errors!"));
          } else {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              message.error("支付失败");
            }).catch(() => console.log("Oops errors!"));
          }
        });
      },
      onCancel() {
        console.log();
      }
    });
  }
}

export default Success;
