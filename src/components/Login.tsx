import { Button, Checkbox, Form, Icon, Input, message } from "antd";
import axios from "axios";
import * as React from "react";
import * as styles from "../css/public.css";

class Login extends React.Component<any, any> {
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} id={styles.login_form}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入用户名!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>记住密码</Checkbox>)}
          <a id={styles.login_form_forgot} href="#/forgot">
            忘记密码
          </a>
          <Button
            type="primary"
            htmlType="submit"
            id={styles.login_form_button}
          >
            登 录
          </Button>
          Or <a href="#/register">立即注册</a>
        </Form.Item>
      </Form>
    );
  }

  private handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      const param = {
        username: values.username,
        password: values.password
      };
      axios
        .post("http://localhost:8083/login", param, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        })
        .then(res => {
          if (res.data.code === 200) {
            const Authorization =
              res.data.data.tokenHead + res.data.data.token + "";
            localStorage.setItem("Authorization", Authorization);
            localStorage.setItem("username", values.username);
            message.info("登录成功");
            window.location.reload();
          } else {
            message.error("登录失败");
          }
        });
    });
  };
}

const LoginForm = Form.create({ name: "normal_login" })(Login);

export default LoginForm;
