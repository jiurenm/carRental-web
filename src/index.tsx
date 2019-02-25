import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker'

import { App } from './components/App';
import { Help } from './components/Help';
import { Error } from './components/404';
import { Hello } from './components/Hello';
import { Contact } from './components/Contact'
import LoginForm from './components/Login';

ReactDOM.render((
    <Router>
        <React.Fragment>
            <Switch>
                <Route exact={true} path="/" component={App}/>
                <Route path="/help/:id" component={Help}/>
                <Route path="/hello" component={Hello}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={LoginForm}/>
                <Route component={Error}/>
            </Switch>
        </React.Fragment>
    </Router>
), document.getElementById('root') as HTMLElement);

registerServiceWorker();