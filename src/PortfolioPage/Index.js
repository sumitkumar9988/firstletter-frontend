import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Views/About';
import Codechef from './Views/Codechef';
import Achievement from './Views/Achievement';
import Codeforces from './Views/Codeforces';
import Home from './Views/Home';
import ProjectDetails from './Views/ProjectDetails';
import Spoj from './Views/Spoj';
import FourOFour from './../extraPage/FourOFour';

const Index = (props) => {
  console.log('in porftlio page subdomain');
  console.log(props.subDomain);
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/codechef" component={Codechef} />
          <Route path="/codeforces" component={Codeforces} />
          <Route path="/achievement" component={Achievement} />
          <Route path="/spoj" component={Spoj} />
          <Route path="/Project/:id" component={ProjectDetails} />
          <Route exact path="/" component={Home} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
