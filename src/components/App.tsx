import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from './Main'

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;