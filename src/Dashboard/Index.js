import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './views/Home'
import Profile from './views/Profile'
const Index = ({ match }) => {
  return (
    <div>
      <Router>
      <Layout>
        <Switch>
        <Route   path={`${match.path}/me`} component={Profile} />
          <Route exact path={match.path} component={Home} />
        </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default Index;
