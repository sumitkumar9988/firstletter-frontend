import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Views/About';
import Home from './Views/Home';
import Achievement from './Views/Achievement';
import FourOFour from './../extraPage/FourOFour';

const Index = (props) => {
  console.log(props.subDomain);
  const subdomain = props.subDomain;
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/about" render={(props) => <About {...props} subdomain={subdomain} />} />
          <Route path="/achievement" render={(props) => <Achievement {...props} subdomain={subdomain} />} />
          <Route path="/" render={(props) => <Home {...props} subdomain={subdomain} />} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
