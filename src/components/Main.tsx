import * as React from 'react';
import { Divider, Carousel, BackTop } from 'antd';

import Header from './Header';
import Footer from './Footer';

import * as styles from '../css/public.css'

/// <reference path="../interfaces.d.ts"/>

export class Main extends React.Component {
    public render() {
        return (
            <div>
                <Header/>
                <div>
                    <Carousel autoplay={true} className={styles.carcousel}>
                        <div><a href="#/register"><img src="//files.1hai.cn/group72/M00/65/CE/rBQFIFvb_VOAOPmDAAJT_SGA7i8728.jpg" /></a></div>
                        <div><a href="#/aboard"><img src="//fimg.zuchecdn.com/upload/web/HomePage/HeadFigure/2018/2560x500-guojizuche-180201-web.jpg" /></a></div>
                        <div><a href="//www.tmall.com"><img src="//i.loli.net/2019/02/25/5c7380633082d.jpg" /></a></div>
                    </Carousel>
                </div>
                <Divider/>
                <Footer/>
                <div>
                    <BackTop />
                </div>
            </div>
        );
    }
}