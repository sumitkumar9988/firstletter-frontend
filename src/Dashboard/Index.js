import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Nav from './components/Nav';
import Education from './views/Education'
import Certificate from './views/Certificate'
import Experience from './views/Experience'

const Index = ({ match }) => {
  return (
    <div>
      <Router>
        <Nav  />
        <Switch>
          <Route exact path={match.path} component={Home} />
          {/* <Route path={`${match.path}/project`} component={Project} /> */}
          <Route exact path={`${match.path}/ach`} component={Education} />
          <Route path={`${match.path}/ach/education`} component={Education} />
          <Route path={`${match.path}/ach/certificate`} component={Certificate} />
          <Route path={`${match.path}/ach/experience`} component={Experience} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
