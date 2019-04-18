import * as React from "react";
import { Menu, Dropdown, Icon } from "antd";
import * as createHashHistroy from "history";

class DropDown extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const onClick = (key: any) => {
      switch (key.key) {
        case "1":
          createHashHistroy.createHashHistory().push("/account");
          break;
        case "2":
          createHashHistroy.createHashHistory().push("/account");
          break;
        case "3":
          createHashHistroy.createHashHistory().push("/account");
          break;
        case "4":
          window.localStorage.removeItem("Authorization");
          location.reload();
          break;
        default:
          break;
      }
    };
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">我的订单</Menu.Item>
        <Menu.Item key="3">我的账户</Menu.Item>
        <Menu.Item key="4">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#/account">
          您好！{window.localStorage.getItem("username")} <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

export default DropDown;
