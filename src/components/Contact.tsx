import * as React from 'react';

import Header from './Header';
import Footer from './Footer';

export class Contact extends React.Component {
    public render() {
        return (
            <div>
                <Header/>
                <div className="suggestion">
                    <h1>感谢您的意见与建议</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}