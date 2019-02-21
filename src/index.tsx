import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { App } from './components/App';
import { Help } from './components/Help';
import { Error } from './components/404';
import { Hello } from './components/Hello';
import { Contact } from './components/Contact'

ReactDOM.render((
    <Router>
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/help/:id" component={Help}></Route>
                <Route path="/hello" component={Hello}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route component={Error}></Route>
            </Switch>
        </React.Fragment>
    </Router>
), document.getElementById('app'));