import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import Login from './components/pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';
import UserList from './components/UserList';
function App() {

  return (
    <div className="h">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/notfound" component={NotFound} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/users" component={UserList} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
