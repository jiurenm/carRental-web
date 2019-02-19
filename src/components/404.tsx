import * as React from "react";
//import { Link } from "react-router-dom";

import { Button } from "antd";

/// <reference path="../interfaces.d.ts"/>

export class Error extends React.Component {
    render () {
        return <div className="error-container">
            <p/>
            {
                console.log("a")
            }
            <div>
                <h2>404</h2>
                <p>抱歉，你访问的页面不存在</p>
                <Button type="primary">
                    {/* <Link to="/">返回首页</Link> */}
                </Button>
            </div>
        </div>
    }
}