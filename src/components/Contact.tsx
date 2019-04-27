import { AutoComplete, BackTop, Button, Divider, Input, message } from "antd";
import * as React from "react";
/// <reference path="../interfaces.d.ts"/>
import * as styles from "../css/contract.css";
import Footer from "./Footer";
import Header from "./Header";
import Axios from 'axios';

const { TextArea } = Input;

class Contact extends React.Component<any, contractState> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataSource: [],
      zhuti: '',
      phone: '',
      email: '',
      context: '',
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
                <Input id={styles.input} onChange={this.zhuti}/>
              </td>
            </tr>
            <tr>
              <td>
                <p>手机号码：</p>
              </td>
              <td>
                <Input id={styles.input} onChange={this.phone}/>
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
                <TextArea rows={5} onChange={this.content}/>
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <Button type="primary" block={true} onClick={this.handleClick}>
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
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
      email: value
    });
  };

  private zhuti = (e:any) => {
    this.setState({
      zhuti: e.target.value
    })
  };

  private phone = (e:any) => {
    this.setState({
      phone: e.target.value
    })
  };

  private content = (e:any) => {
    this.setState({
      context: e.target.value
    })
  };

  private handleClick = () => {
    if (this.state.zhuti === "") {
      message.error("主题不能为空");
      if (this.state.phone === "") {
        message.error("手机不能为空");
        if (this.state.context === "") {
          message.error("内容不能为空");
        }
      }
    } else {
      const params = {
        title: this.state.zhuti,
        phone: this.state.phone,
        email: this.state.phone,
        context: this.state.context,
      }
      Axios.post("http://47.102.210.246:8083/message/send", params, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: localStorage.getItem("Authorization")
        }
      }).then(res => {
        if (res.data.code === 200) {
          message.success("提交成功")
        }
      })
    }
  };
}

export default Contact;
