import { BackTop, Divider, Icon, Layout, Menu } from "antd";
import * as React from "react";
import * as styles from "../css/header.css";
import Footer from "./Footer";
import Header from "./Header";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Help extends React.Component<HelpProps, HelpState> {
  constructor(props: HelpProps) {
    super(props);
    this.state = {
      context: this.setContext(this.props.match.params.id)
    };
    this.onSelect = this.onSelect.bind(this);
  }

  public render() {
    const context: string = this.state.context;
    return (
      <div>
        <Header />
        <div className={styles.help}>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Layout style={{ padding: "24px 0", background: "#fff" }}>
                <Sider width={200} style={{ background: "#fff" }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={[this.props.match.params.id]}
                    defaultOpenKeys={["sub1", "sub2", "sub3"]}
                    style={{ height: "100%" }}
                    onSelect={this.onSelect}
                  >
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="user" />
                          新手上路
                        </span>
                      }
                    >
                      <Menu.Item key="1">法律解读</Menu.Item>
                      <Menu.Item key="2">押金政策</Menu.Item>
                      <Menu.Item key="3">保险条款</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="laptop" />
                          服务规则
                        </span>
                      }
                    >
                      <Menu.Item key="4">服务条款</Menu.Item>
                      <Menu.Item key="5">驾客协议</Menu.Item>
                      <Menu.Item key="6">平台规则</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub3"
                      title={
                        <span>
                          <Icon type="notification" />
                          帮助中心
                        </span>
                      }
                    >
                      <Menu.Item key="7">预定取车</Menu.Item>
                      <Menu.Item key="8">会员服务</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content
                  style={{
                    padding: "0 24px",
                    minHeight: 280,
                    textAlign: "center"
                  }}
                >
                  {context}
                </Content>
              </Layout>
            </Content>
          </Layout>
        </div>
        <Divider />
        <Footer />
        <div>
          <BackTop />
        </div>
      </div>
    );
  }

  private onSelect(item: any) {
    switch (item.key) {
      case "1":
        this.setState({
          context: "法律解读"
        });
        this.props.history.push("/help/1");
        break;
      case "2":
        this.setState({
          context: "押金政策"
        });
        this.props.history.push("/help/2");
        break;
      case "3":
        this.setState({
          context: "保险条款"
        });
        this.props.history.push("/help/3");
        break;
      case "4":
        this.setState({
          context: "服务条款"
        });
        this.props.history.push("/help/4");
        break;
      case "5":
        this.setState({
          context: "驾客协议"
        });
        this.props.history.push("/help/5");
        break;
      case "6":
        this.setState({
          context: "平台规则"
        });
        this.props.history.push("/help/6");
        break;
      case "7":
        this.setState({
          context: "预定取车"
        });
        this.props.history.push("/help/7");
        break;
      case "8":
        this.setState({
          context: "会员服务"
        });
        this.props.history.push("/help/8");
        break;
      default:
        break;
    }
  }

  private setContext(val: any) {
    switch (val) {
      case "1":
        val = "法律解读";
        return val;
      case "2":
        val = "押金政策";
        return val;
      case "3":
        val = "保险条款";
        return val;
      case "4":
        val = "服务条款";
        return val;
      case "5":
        val = "驾客协议";
        return val;
      case "6":
        val = "平台规则";
        return val;
      case "7":
        val = "预定取车";
        return val;
      case "8":
        val = "会员服务";
        return val;
      default:
        break;
    }
  }
}

export default Help;
