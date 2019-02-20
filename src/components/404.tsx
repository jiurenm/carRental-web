import * as React from "react";
//import { Link } from "react-router-dom";

import { Empty,Button } from "antd";

/// <reference path="../interfaces.d.ts"/>

export class Error extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    goMain() {
        this.props.history.push("/")
    }

    render () {
        return (
            <div>
                <Empty
                    image="//gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    description={
                        <span>
                            404 Not Found
                        </span>
                    }
                ><Button type="primary" onClick={this.goMain.bind(this)}>返回首页</Button>
                </Empty>
            </div>
        );
    }
}