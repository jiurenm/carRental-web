import { Button, Card, Form, Icon, Input, message } from "antd";
import Axios from "axios";
import * as React from "react";

class RegisterForm extends React.Component<any, any> {
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div
        style={{
          backgroundImage:
            "url(https://i.loli.net/2019/04/20/5cbaba56972e6.gif)",
          height: "700px",
          width: "100%"
        }}
      >
        <div style={{ margin: "auto", paddingTop: "10%" }}>
          <Card
            style={{ maxWidth: 500, marginRight: "auto", marginLeft: "auto" }}
            hoverable={true}
          >
            <Form
              onSubmit={this.handleSubmit}
              className="login-form"
              style={{
                maxWidth: 300,
                marginRight: "auto",
                marginLeft: "auto"
              }}
            >
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [{ required: true, message: "请输入用户名！" }]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="用户名"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password1", {
                  rules: [{ required: true, message: "请输入密码！" }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="密码"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password2", {
                  rules: [{ required: true, message: "请输入密码！" }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="确认密码"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }

  private handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (values.password1 !== values.password2) {
        message.error("两次密码不相同");
      } else {
        const param = {
          username: values.username,
          password: values.password1
        };
        Axios.post("http://localhost:8083/register", param, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        }).then(res => {
          if (res.data.code === 200) {
            message.info("注册成功");
            window.location.href = "#/";
          } else {
            message.error(res.data.data);
          }
        });
      }
    });
  };
}

const Register = Form.create({ name: "normal_login" })(RegisterForm);

export default Register;
