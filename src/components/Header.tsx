import * as React from 'react';
import { Icon, Drawer, Input, Button, message, Divider } from 'antd';

import DropDown from './DropDown';

import * as styles from '../css/header.css';

/// <reference path="../interfaces.d.ts"/>

class Header extends React.Component<any, DrawerState> {
    private userNameInput:Input | null;

    constructor(props:any) {
        super(props);
        this.state = {
            password: "",
            userName: "",
            visible: false,
        }
        this.login = this.login.bind(this);
    };

    public render() {
        return(
            <div className={styles.head}>
                <div className={styles.logo}>
                    <a href="#/"><img src="//i.loli.net/2019/02/15/5c66212ba997e.png" alt="logo0"/></a>
                </div>
                <ul className={styles.nav}>
                    <li><a href="#/">首页</a></li>
                    <li><a href="#/car">自驾租车</a></li>
                    <li><a href="#/help/1">帮助中心</a></li>
                    <li><a href="#/contact">留言板</a></li>
                </ul>
                <div className={styles.header_right}>
                    <div>
                        <ul>
                            {this.isLogin()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    private isLogin () {
        if(window.localStorage.getItem("Authorization") !== null) {
            return <li>
                    <DropDown/>
                </li>
        } else {
            const { userName } = this.state;
            const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
            return (
                <div>
                    <li>
                        <a onClick={this.showDrawer}>登 录</a>
                        <Divider type="vertical"/>
                        <a id={styles.register} href="#/register">注 册</a></li>
                    <Drawer
                        title="登 录"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                    <div className={styles.login_input}>
                        <Input
                            placeholder="请输入您的手机号"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            // value={userName}
                            // onChange={value => this.onChange('username',value.target.value)}
                            onChange={this.onChangeName}
                            // ref={node => this.userNameInput = node}
                        />
                    </div>
                    <div className={styles.login_password}>
                        <Input.Password placeholder="请输入密码" onChange={this.onChangePassword} />
                    </div>
                    <p className={styles.forget}><a href="#/reset">忘记密码？</a></p>
                    <div>
                        <Button id={styles.btn_login} type="primary" onClick={this.login}>登 录</Button>
                        <Button id={styles.btn_cancel} type="default" onClick={this.onClose}>取消</Button>
                    </div>
                    </Drawer>
                </div>
            );
        }
    }

    private login():void {
        if (this.state.userName === "" && this.state.password === "") {
                message.warn("用户名或密码不能为空",3);
        } else {
            // axios.post('').then().catch();
            if (this.state.userName === "admin" && this.state.password === "123456") {
                window.localStorage.setItem('Authorization','abc');
                message.success('登录成功',3);
                this.onClose();
            } else {
                message.warning("登录失败,用户名或密码错误",3);
            }
        }
    }

    private emitEmpty = () => {
        if(this.userNameInput !== null) {
            this.userNameInput.focus();
        }        
        this.setState({ userName: '' });
    }

    private onChangeName = (e:any) => {
        this.setState({
            userName: e.target.value
        });
    }

    private onChangePassword = (e:any) => {
        this.setState({
            password: e.target.value
        });
    }

    private showDrawer = () => {
        this.setState({
            visible: true
        });
    };

    private onClose = () => {
        this.setState({
            visible: false
        });
    };
}

export default Header;