import * as React from 'react';
import { Divider, Carousel } from 'antd';

import {Header} from './Header';
import Footer from './Footer';

/// <reference path="../interfaces.d.ts"/>

export class Main extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Carousel autoplay>
                    <div><h1>广告位</h1></div>
                    <div><h1>广告位</h1></div>
                    <div><h1>广告位</h1></div>
                    <div><h1>广告位</h1></div>
                </Carousel>
                <Divider></Divider>
                <Footer></Footer>
            </div>
        );
    }
}