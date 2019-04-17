import * as React from "react";
import {
  Menu,
  Card,
  Tabs,
  List,
  Modal,
  Input,
  Button,
  Divider,
  message,
  Table
} from "antd";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";

const confirm = Modal.confirm;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

const columns = [
  {
    title: "订单信息",
    dataIndex: "info",
    render: (text: any) => (
      <span style={{ display: "flex" }}>
        <a href={"#/cardetail/" + text[0].cid}>
          <img style={{ width: 166, height: 97 }} src={text[0].picture} />
        </a>
        <div style={{ marginTop: 10 }}>
          <p>乘坐{text[0].zws}人</p>
          <p>订单号:{text[0].id}</p>
        </div>
      </span>
    )
  },
  {
    title: "取还车信息",
    dataIndex: "time",
    render: (text: any) => (
      <span>
        <p>取车时间:{text[0]}</p>
        <p>还车时间:{text[1]}</p>
      </span>
    )
  },
  {
    title: "总计",
    dataIndex: "price"
  },
  {
    title: "状态",
    dataIndex: "info",
    render: (text: any) => {
      switch (text[0].status) {
        case "等待付款":
          return (
            <span style={{ textAlign: "center" }}>
              <p>{text[0].status}</p>
              <Button href={"#/success/" + text[0].id}>立即支付</Button>
            </span>
          );

        default:
          return <p>{text[0].status}</p>;
      }
    }
  }
];

class Account extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      old: '',
      new1: '',
      new2: '',
      content: "",
      loding: false,
      oldPhone: "",
      newPhone: "",
      code: "",
      info: {
        id: "",
        username: "",
        name: "",
        age: "",
        tel: "",
        email: "",
        driveNum: "",
        driveType: "",
        isEnable: ""
      },
      order: [
        {
          info: [],
          time: [1, 2],
          price: "",
          status: ""
        }
      ]
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  public componentWillMount() {
    axios
      .get("http://localhost:8083/order/all", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: localStorage.getItem("Authorization")
        }
      })
      .then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.setState({
            order: res.data.data,
            content: (
              <Tabs defaultActiveKey="1">
                <TabPane tab="全部" key="1">
                  <Table
                    columns={columns}
                    dataSource={res.data.data}
                    size="middle"
                  />
                </TabPane>
                <TabPane tab="等待付款" key="2">
                  <Table
                    columns={columns}
                    dataSource={res.data.data.filter(
                      (item: any) => item.status === "等待付款"
                    )}
                    size="middle"
                  />
                </TabPane>
                <TabPane tab="预定成功" key="3">
                  <Table
                    columns={columns}
                    dataSource={res.data.data.filter(
                      (item: any) => item.status === "预定成功"
                    )}
                    size="middle"
                  />
                </TabPane>
                <TabPane tab="租赁中" key="4">
                  <Table
                    columns={columns}
                    dataSource={res.data.data.filter(
                      (item: any) => item.status === "租赁中"
                    )}
                    size="middle"
                  />
                </TabPane>
                <TabPane tab="已完成" key="5">
                  <Table
                    columns={columns}
                    dataSource={res.data.data.filter(
                      (item: any) => item.status === "已完成"
                    )}
                    size="middle"
                  />
                </TabPane>
                <TabPane tab="已取消" key="6">
                  <Table
                    columns={columns}
                    dataSource={res.data.data.filter(
                      (item: any) => item.status === "已取消"
                    )}
                    size="middle"
                  />
                </TabPane>
              </Tabs>
            )
          });
        }
      });
  }

  public render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: "5%", marginLeft: "10%" }}>
          <div style={{ float: "left" }}>
            <Menu
              onSelect={this.handleSelect}
              onClick={this.handleSelect}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <MenuItemGroup key="g1" title="我的订单">
                <Menu.Item key="1">自驾订单</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key="g3" title="我的账户">
                <Menu.Item key="5">我的信息</Menu.Item>
                <Menu.Item key="6">登录密码</Menu.Item>
              </MenuItemGroup>
            </Menu>
          </div>
          <div style={{ marginLeft: 270 }}>
            <Card style={{ width: 800 }}>{this.state.content}</Card>
          </div>
        </div>
        <Divider />
        <Footer />
      </div>
    );
  }

  private handleSelect(e: any) {
    console.log(e);
    switch (e.key) {
      case "1":
        console.log(e.key);
        this.setState({
          content: (
            <Tabs defaultActiveKey="1">
              <TabPane tab="全部" key="1">
                <Table
                  columns={columns}
                  dataSource={this.state.order}
                  size="middle"
                />
              </TabPane>
              <TabPane tab="等待付款" key="2">
                <Table
                  columns={columns}
                  dataSource={this.state.order}
                  size="middle"
                />
              </TabPane>
              <TabPane tab="预定成功" key="3">
                <Table
                  columns={columns}
                  dataSource={this.state.order}
                  size="middle"
                />
              </TabPane>
              <TabPane tab="租赁中" key="4">
                <Table
                  columns={columns}
                  dataSource={this.state.order}
                  size="middle"
                />
              </TabPane>
              <TabPane tab="已完成" key="5">
                <Table
                  columns={columns}
                  dataSource={this.state.order}
                  size="middle"
                />
              </TabPane>
              <TabPane tab="已取消" key="6">
                <Table
                  columns={columns}
                  dataSource={this.state.order}
                  size="middle"
                />
              </TabPane>
            </Tabs>
          )
        });
        break;
      case "5":
        axios
          .get("http://localhost:8083/info", {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              Authorization: localStorage.getItem("Authorization")
            }
          })
          .then(res => {
            if (res.data.code === 200) {
              this.setState({
                info: {
                  id: res.data.data.id,
                  username: res.data.data.username,
                  name: res.data.data.name,
                  age: res.data.data.age,
                  tel: res.data.data.tel,
                  email: res.data.data.email,
                  driveNum: res.data.data.driveNum,
                  driveType: res.data.data.driveType,
                  isEnable: res.data.data.isEnable
                },
                content: (
                  <List
                    size="large"
                    header={<h2>我的信息</h2>}
                    bordered={false}
                    dataSource={[
                      "姓名:" + this.state.info.name,
                      "证件:" + this.state.info.driveNum,
                      "手机号码:" + this.state.info.tel,
                      "电子邮箱:" + this.state.info.email
                    ]}
                    renderItem={(item: any) => {
                      if (item.slice(0, 4) === "手机号码") {
                        return (
                          <List.Item
                            actions={[
                              <a
                                onClick={() => {
                                  this.changePassword();
                                }}
                                key={item.id}
                              >
                                修改
                              </a>
                            ]}
                          >
                            {item}
                          </List.Item>
                        );
                      }
                      if (item.slice(0, 4) === "电子邮箱") {
                        return (
                          <List.Item actions={[<a key={item.id}>验证</a>]}>
                            {item}
                          </List.Item>
                        );
                      } else {
                        return <List.Item>{item}</List.Item>;
                      }
                    }}
                  />
                )
              });
            }
          });
        break;
      case "6":
        this.setState({
          content: (
            <div>
              <Input.Password placeholder="输入原密码" onChange={(value) => this.old(value.target.value)}/>
              <Input.Password style={{ marginTop: 10 }} placeholder="输入新密码" onChange={(value) => this.new1(value.target.value)}/>
              <Input.Password style={{ marginTop: 10 }} placeholder="再次输入新密码" onChange={(value) => this.new2(value.target.value)}/>
              <Button style={{ marginTop: 10 }} type="primary" block={true} onClick={()=>this.confirm()}>确认</Button>
            </div>
          )
        });
        break;
      default:
        break;
    }
  }

  private old = (e:any) => {
    this.setState({
      old: e
    })
  }

  private new1 = (e:any) => {
    this.setState({
      new1: e
    })
  }

  private new2 = (e:any) => {
    this.setState({
      new2: e
    })
  }

  private confirm = () => {
    if (this.state.new1 !== this.state.new2) {
      message.error('前后密码不相同')
    } else {
      axios.get('http://localhost:8083/changePassword/' + this.state.new1, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: localStorage.getItem("Authorization")
        }
      }).then(res => {
        if(res.data.code === 200) {
          this.setState({
            old: '',
            new1: '',
            new2: ''
          })
          message.info('修改成功')
        }
      })
    }
  }

  private changePassword() {
    confirm({
      title: "修改手机",
      content: (
        <div>
          <Input
            style={{ marginTop: 5, width: 314 }}
            placeholder="原手机号"
            onChange={value => this.onChange(value)}
          />
          <Input
            style={{ marginTop: 5, width: 314 }}
            placeholder="新手机号"
            onChange={value => this.newPhone(value)}
          />
          <div style={{ width: 314, marginTop: 5, display: "flex" }}>
            <Input
              placeholder="手机动态码"
              onChange={value => this.code(value)}
            />
            <Button type="primary" onClick={() => this.ok()}>
              获取验证码
            </Button>
          </div>
        </div>
      ),
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        // axios.get('http://localhost:8083/changePhone/', {
        //   headers:{
        //     'Content-Type': 'application/json;charset=UTF-8',
        //     'Authorization': localStorage.getItem("Authorization")
        //   }
        // })
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  private onChange(e: any) {
    this.setState({
      oldPhone: e.target.value
    });
  }

  private newPhone(e: any) {
    this.setState({
      newPhone: e.target.value
    });
  }

  private code(e: any) {
    this.setState({
      code: e.target.value
    });
  }

  private ok() {
    if (this.state.oldPhone === "") {
      message.info("请先输入原手机号");
      return;
    }
    if (this.state.newPhone === "") {
      message.info("请输入新手机号");
      return;
    }
    axios
      .get("http://localhost:8083/changePhone/" + this.state.newPhone, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: localStorage.getItem("Authorization")
        }
      })
      .then(res => {
        if (res.data.code === 200) {
          console.log("ok");
        }
      });
  }
}

export default Account;
