import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Login } from './components/Login';
import { App } from './components/App';
import { DropDown } from './components/Header'

ReactDOM.render((
    <Router>
        <React.Fragment>
            <Route exact path="/" component={App}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/a" component={DropDown}></Route>
        </React.Fragment>
    </Router>
), document.getElementById('app'));