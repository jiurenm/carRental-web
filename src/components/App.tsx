import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './Header';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Header}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;