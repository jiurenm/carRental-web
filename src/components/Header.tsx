import * as React from 'react';
import { Modal, Divider } from 'antd';

import DropDown from './DropDown';

import * as styles from '../css/header.css';
import LoginForm from './Login';

/// <reference path="../interfaces.d.ts"/>

class Header extends React.Component<any, DrawerState> {
    constructor(props:any) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading: false,
        }
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
            const { visible, confirmLoading } = this.state
            return (
                <div>
                    <li>
                        <a onClick={this.showModal}>登 录</a>
                        <Divider type="vertical"/>
                        <a id={styles.register} href="#/register">注 册</a></li>
                    <Modal
                        title="Login"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <LoginForm/>
                    </Modal>
                </div>
            );
        }
    }

    private showModal = () => {
        this.setState({
            visible: true,
        });
    }

    private handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            })
        },1000);
    }

    private handleCancel = () => {
        this.setState({
          visible: false,
        });
    }
}

export default Header;