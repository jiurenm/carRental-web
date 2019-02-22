import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from './Main'

export class App extends React.Component {
    public render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact={true} path="/" component={Main}/>
                </Switch>
            </div>
        );
    }
}

export default App;