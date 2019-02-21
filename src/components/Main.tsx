import * as React from 'react';
import { Divider } from 'antd';

import {Header} from './Header';
import {Footer} from './Footer';

/// <reference path="../interfaces.d.ts"/>

export class Main extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Divider></Divider>
                <Footer></Footer>
            </div>
        );
    }
}