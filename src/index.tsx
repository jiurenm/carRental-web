import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Login } from './components/Login';
import { App } from './components/App';
import { Help } from './components/Help';
import { Error } from './components/404';

ReactDOM.render((
    <Router>
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/help/:id" component={Help}></Route>
                <Route component={Error}></Route>
            </Switch>
        </React.Fragment>
    </Router>
), document.getElementById('app'));