import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Views/About';
import Home from './Views/Home';
import FourOFour from './../extraPage/FourOFour';

const Index = (props) => {
  console.log('in porftlio page subdomain');
  console.log(props.subDomain);
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
