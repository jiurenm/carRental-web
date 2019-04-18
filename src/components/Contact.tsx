import { AutoComplete, BackTop, Button, Divider, Input } from "antd";
import * as React from "react";
/// <reference path="../interfaces.d.ts"/>
import * as styles from "../css/contract.css";
import Footer from "./Footer";
import Header from "./Header";

const { TextArea } = Input;

class Contact extends React.Component<any, contractState> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  public render() {
    return (
      <div>
        <Header />
        <div className={styles.suggestion}>
          <h1>感谢您的意见与建议</h1>
          <div className={styles.context}>
            <tr>
              <td>
                <p>主题：</p>
              </td>
              <td>
                <Input id={styles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <p>手机号码：</p>
              </td>
              <td>
                <Input id={styles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <p>电子邮件：</p>
              </td>
              <td>
                <AutoComplete
                  style={{ width: "350px" }}
                  dataSource={this.state.dataSource}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>内容：</p>
              </td>
              <td>
                <TextArea rows={5} />
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <Button type="primary" block={true}>
                  提交
                </Button>
              </td>
            </tr>
          </div>
          <div className={styles.img}>
            <img src="https://i.loli.net/2019/02/25/5c737c44adb6f.jpg" />
          </div>
          <div>
            <BackTop />
          </div>
        </div>
        <Divider />
        <Footer />
      </div>
    );
  }

  private handleChange = (value: any) => {
    this.setState({
      dataSource:
        !value || value.indexOf("@") >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
    });
  };
}

export default Contact;
