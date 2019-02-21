import * as React from "react";
import { Menu, Dropdown, Icon, Drawer, Input, Button, message, Divider } from 'antd';
import * as createHashHistroy from  "history";
import 'antd/dist/antd.css';

/// <reference path="../interfaces.d.ts"/>

export class Header extends React.Component<any, DrawerState> {
    userNameInput:any;

    constructor(props:any) {
        super(props);
        this.state = {
            visible: false,
            userName: "",
            password: ""
        }
    };

    showDrawer = () => {
        this.setState({
            visible: true
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    onChange = (key:string, val:any) => {
        switch (key) {
            case 'username':
                this.setState({
                    userName: val
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

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    private login():void {
        if (this.state.userName === "" && this.state.password === "") {
                message.warn("用户名或密码不能为空",3);
        } else {
            //axios.post('').then().catch();
            if (this.state.userName === "admin" && this.state.password === "123456") {
                window.localStorage.setItem('Authorization','abc');
                message.success('登录成功',3);
                createHashHistroy.createHashHistory().push('#/');
            } else {
                message.warning("登录失败,用户名或密码错误",3);
            }
        }
    }

    isLogin () {
        if(window.localStorage.getItem("Authorization") !== null) {
            return <li>
                    <DropDown></DropDown>
                </li>
        } else {
            const { userName } = this.state;
            const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
            return (
                <div>
                    <li>
                        <a onClick={this.showDrawer}>登 录</a>
                        <Divider type="vertical"></Divider>
                        <a id="register" href="#/register">注 册</a></li>
                    <Drawer
                        title="登 录"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                    <Input
                        placeholder="请输入您的手机号"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={userName}
                        onChange={value => this.onChange('username',value.target.value)}
                        ref={node => this.userNameInput = node}
                    ></Input>
                    <Input.Password placeholder="请输入密码" onChange={value => this.onChange('password',value.target.value)} />
                    <a className="forget" href="#/reset"><p>忘记密码？</p></a>
                    <div className="login">
                        <Button type="primary" onClick={this.login.bind(this)}>登 录</Button>
                        <Button type="default" onClick={this.onClose}>取消</Button>
                    </div>
                    </Drawer>
                </div>
            );
        }
    };

    render() {
        return(
            <div className="head">
                <div className="logo">
                    <a href="./index"><img src="//i.loli.net/2019/02/15/5c66212ba997e.png" alt="logo"></img></a>
                </div>
                <ul className="nav">
                    <li><a href="#/">首页</a></li>
                    <li><a href="#">自驾租车</a></li>
                    <li><a href="#/help/1">帮助中心</a></li>
                    <li><a href="#">留言板</a></li>
                </ul>
                <div className="header-right">
                    <div>
                        <ul>
                            {this.isLogin()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}

export class DropDown extends React.Component {
    constructor(props:any) {
        super(props);
    };
    render() {
        const onClick = (key:any) => {
            switch (key.key) {
                case '1':
                    break; 
                case '2':
                    break;
                case '3':
                    console.log(window.localStorage.getItem('Authorization'));
                    break;
                case '4':
                    window.localStorage.removeItem('Authorization');
                    console.log(window.localStorage.getItem('Authorization'));
                    location.reload();
                    break;
                default:
                    break;
            }
        };
        const menu = (
            <Menu onClick={onClick}>
                <Menu.Item key="1">我的订单</Menu.Item>
                <Menu.Item key="2">我的资产</Menu.Item>
                <Menu.Item key="3">我的账户</Menu.Item>
                <Menu.Item key="4">退出登录</Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">您好！{window.localStorage.getItem("Authorization")} <Icon type="down" /></a>
            </Dropdown>
        );
    }
}