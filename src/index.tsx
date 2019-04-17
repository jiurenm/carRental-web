import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import { App } from "./components/App";
import { Help } from "./components/Help";
import { Error } from "./components/404";
import { Contact } from "./components/Contact";
import LoginForm from "./components/Login";
import CarRental from "./components/CarRental";
import Details from "./components/Details";
import Account from "./components/Account";
import Order from "./components/Order";
import Success from "./components/OrderSuccess";
import Register from "./components/Register";

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/help/:id" component={Help} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginForm} />
        <Route path="/car" component={CarRental} />
        <Route path="/cardetail/:id" component={Details} />
        <Route path="/account" component={Account} />
        <Route path="/order/:time/:id" component={Order} />
        <Route path="/success/:id" component={Success} />
        <Route path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  </Router>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
