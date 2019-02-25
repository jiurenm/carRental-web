import * as React from 'react';
import { Form, Input, Icon, Checkbox, Button, message } from 'antd';

import * as styles from '../css/public.css';

class Login extends React.Component<any,any> {
    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={ this.handleSubmit } id={styles.login_form}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />} placeholder="Username"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a id={styles.login_form_forgot} href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" id={styles.login_form_button}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }

    private handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, values:any) => {
            if(values.username === "admin" && values.password === "123456") {
                localStorage.setItem('Authorization','abc')
                message.info("登录成功");
                window.location.reload();
            } else {
                message.error("登录失败")
            }
        });
    }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm;