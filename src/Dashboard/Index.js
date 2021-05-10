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
const Index = () => {
  const history = useHistory;
  return (
    <div className="">
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/home/me" component={Profile} />
            <Route path="/home/education" component={Education} />
            <Route path="/home/experience" component={Experience} />
            <Route path="/home/jobs" component={Jobs} />
            <Route path="/home/projects" component={Project} />
            <Route path="/home/programming" component={Cp} />
            <Route path="/home/certificate" component={Certificate} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default Index;
