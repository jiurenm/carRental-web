import * as React from "react";
import { Menu, Dropdown, Icon } from 'antd';

/// <reference path="../interfaces.d.ts"/>

export class Header extends React.Component {
    isLogin () {
        if(window.localStorage.getItem("Authorization") !== null) {
            return <li>
                    <DropDown></DropDown>
                </li>
        } else {
            return <li><a id="login" href="#/login">登 录</a>|<a id="register" href="/register">注 册</a></li>
        }
    }

    render() {
        return(
            <div className="header">
                <div className="logo">
                    <a href="./index"><img src="//i.loli.net/2019/02/15/5c66212ba997e.png" alt="logo"></img></a>
                </div>
                <ul className="nav">
                    <li><a href="#/">首页</a></li>
                    <li><a href="#">自驾租车</a></li>
                    <li><a href="#/help">帮助中心</a></li>
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
    }
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