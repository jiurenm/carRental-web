import * as React from "react";
import { Header } from "./Header";
import { Input } from "antd"

/// <reference path="../interfaces.d.ts"/>

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            liked: false
        }
    }

    private handleClick():void {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const text = this.state.liked ? 'like':'dislike'
        return (
            <div>
                <Input.Password placeholder="请输入密码" />
                {/* <p onClick={this.handleClick.bind(this)}>
                    You {text} {this.props.firstName}·{this.props.lastName}
                </p>
                <Header></Header> */}
            </div>
        );
    }
}