import * as React from 'react';

import { Empty,Button } from 'antd';
import * as createHashHistroy from  "history";

import '../css/public.css'

/// <reference path="../interfaces.d.ts"/>

export class Error extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    public render () {
        return (
            <div>
                <Empty
                    image="//gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    description={
                        <span>
                            404 Not Found
                        </span>
                    }
                ><Button type="primary" onClick={this.goMain}>返回首页</Button>
                </Empty>
            </div>
        );
    }

    private goMain() {
        createHashHistroy.createHashHistory().push('/');
    }
}