import * as React from "react";
import { Menu, Card, Tabs, List } from "antd";

const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

class Account extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  public render() {
    return (
      <div>
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
            <MenuItemGroup key="g2" title="我的资产">
              <Menu.Item key="2">账户余额</Menu.Item>
              <Menu.Item key="3">银行卡</Menu.Item>
              <Menu.Item key="4">优惠券</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g3" title="我的账户">
              <Menu.Item key="5">我的信息</Menu.Item>
              <Menu.Item key="6">登录密码</Menu.Item>
              <Menu.Item key="7">支付密码</Menu.Item>
              <Menu.Item key="8">驾照认证</Menu.Item>
            </MenuItemGroup>
          </Menu>
        </div>
        <div style={{ marginLeft: 270 }}>
          <Card style={{ width: 800 }}>{this.state.content}</Card>
        </div>
      </div>
    );
  }

  private handleSelect(e: any) {
    console.log(e.key);
    switch (e.key) {
      case "1":
        this.setState({
          content: (
            <Tabs defaultActiveKey="1">
              <TabPane tab="全部" key="1">
                <List
                  size="small"
                  bordered={true}
                  dataSource={data}
                  renderItem={(item: any) => (
                    <List.Item actions={[<a key={item.id}>取消</a>]}>
                      {item}
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="处理中" key="2">
                <List
                  size="small"
                  bordered={true}
                  dataSource={data}
                  renderItem={(item: any) => (
                    <List.Item actions={[<a key={item.id}>取消</a>]}>
                      {item}
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="等待付款" key="3">
                <List
                  size="small"
                  bordered={true}
                  dataSource={data}
                  renderItem={(item: any) => (
                    <List.Item actions={[<a key={item.id}>取消</a>]}>
                      {item}
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="预定成功" key="4">
                <List
                  size="small"
                  bordered={true}
                  dataSource={data}
                  renderItem={(item: any) => (
                    <List.Item actions={[<a key={item.id}>取消</a>]}>
                      {item}
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="租赁中" key="5">
                <List
                  size="small"
                  bordered={true}
                  dataSource={data}
                  renderItem={(item: any) => (
                    <List.Item actions={[<a key={item.id}>取消</a>]}>
                      {item}
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="已完成" key="6">
                <List
                  size="small"
                  bordered={true}
                  dataSource={data}
                  renderItem={(item: any) => (
                    <List.Item actions={[<a key={item.id}>取消</a>]}>
                      {item}
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="已取消" key="7">
                <List
                  size="small"
                  bordered={true}
                  dataSource={data}
                  renderItem={(item: any) => (
                    <List.Item actions={[<a key={item.id}>取消</a>]}>
                      {item}
                    </List.Item>
                  )}
                />
              </TabPane>
            </Tabs>
          )
        });
        break;
      case "5":
        this.setState({
          content: (
            <List
              size="large"
              header={<h2>我的信息</h2>}
              bordered={false}
              dataSource={["姓名", "证件", "手机号码", "电子邮箱"]}
              renderItem={(item: any) => {
                if (item === "手机号码") {
                  return (
                    <List.Item actions={[<a key={item.id}>修改</a>]}>
                      {item}
                    </List.Item>
                  );
                }
                if (item === "电子邮箱") {
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
        break;
      case "6":
        this.setState({
          content: (
            <List
              size="large"
              header={<h2>修改密码</h2>}
              bordered={false}
              dataSource={[
                  <div></div>
              ]}
              renderItem={(item: any) => <List.Item>{item}</List.Item>}
            />
          )
        });
        break;
      default:
        break;
    }
  }
}

export default Account;
