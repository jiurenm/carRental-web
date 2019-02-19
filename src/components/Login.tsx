import * as React from 'react';
import axios from 'axios';

import { Button, Input } from 'antd';

/// <reference path="../interfaces.d.ts"/>

let mystyle = {
    color: 'rgb(251,109,0)',
    fontSize: '13px'
}

export class Login extends React.Component<any, LoginState>{
    constructor(props:any){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange(key:string, val:any) {
        switch (key) {
            case 'username':
                this.setState({
                    username: val
                });
                break;
            case 'password':
                this.setState({
                    password: val
                });
                break;        
            default:
                break;
        }
    }

    login() {
        //axios.post('').then().catch();
        window.localStorage.setItem('Authorization','abc');
        this.props.history.push("/");
    }

    render() {
        const {} = this.state;
        return (
            <div className="login">
                <div className="top">
                    <img src="https://i.loli.net/2019/02/15/5c66212ba997e.png"></img>
                </div>
                <div className="middle">
                    <div className="register">
                        <h4>会员登录</h4>
                        <Input name="username" onChange={value => this.handleChange('username',value.target.value)} placeholder="请输入您的手机号" />
                        <Input.Password name="password" onChange={value => this.handleChange('password',value.target.value)} placeholder="请输入密码" />
                        <a href="#"><p className="a" style={mystyle}>忘记密码？</p></a>
                        <Button type="primary" id="login" onClick={this.login.bind(this)}>登 录</Button>
                        <Button type="default" href="#/register" id="register">还不是会员，立即注册</Button>
                    </div>
                </div>
                <div className="bottom">
	                <p>Copyright©2017-2019 www.zuche.com All Rights Reserved.　一租车官网 京ICP备88888888号 京公网安备号 111111111111111</p>
                </div>
            </div>
        );  
    }
}