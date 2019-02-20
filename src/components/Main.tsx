import * as React from 'react';

import {Header} from './Header';
import {Footer} from './Footer';

/// <reference path="../interfaces.d.ts"/>

export class Main extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        );
    }
}