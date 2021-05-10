import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './views/Home'
import Profile from './views/Profile'
import Education from './views/Education';
import Experience from './views/Experience';
import Jobs from './views/Jobs';
import Project from './views/Project';
import Cp from './views/Cp';
import Certificate from './views/Certificate';
const { useHistory } = 'react-router-dom';
const Index = ({ match }) => {
  const history = useHistory;
  return (
    <div className="">
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path={`${match.path}/me`} component={Profile} />
            <Route path={`${match.path}/education`} component={Education} />
            <Route path={`${match.path}/experience`} component={Experience} />
            <Route path={`${match.path}/jobs`} component={Jobs} />
            <Route path={`${match.path}/projects`} component={Project} />
            <Route path={`${match.path}/programming`} component={Cp} />
            <Route path={`${match.path}/certificate`} component={Certificate} />
            <Route exact path={match.path} component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default Index;
