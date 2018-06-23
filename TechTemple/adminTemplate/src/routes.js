import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import RoomDashboard from './containers/RoomDashboardPage';

class AppIndex extends Component {
  render() {
    return (
      <div style={{flex: 1}}>
        <Router history={browserHistory}>
          <Route>
            <Route path="login" component={LoginPage} />
            <Route path="/" component={App}>
              <IndexRoute component={Dashboard} />
              <Route path="dashboard" component={Dashboard} />
              <Route path="roomDashboard" component={RoomDashboard}/>
              <Route path="form" component={FormPage} />
              <Route path="table" component={TablePage} />
              <Route path="*" component={NotFoundPage} />
            </Route>
          </Route>
        </Router>
      </div>
    );
  }
}

export default (AppIndex);
