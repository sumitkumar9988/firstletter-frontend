import React, { useEffect } from 'react';
import LandingPage from './LandingPage/Index';
import Dashboard from './Dashboard/Index';
import Login from './authPage/Login';
import Register from './authPage/Register';
import ChangePassword from './authPage/ChangePassword';
import ForgetPassword from './authPage/ForgetPassword';
import ResetPassword from './authPage/ResetPassword';
import FourOFour from './extraPage/FourOFour';
import About from './LandingPage/View/About';
import Contact from './LandingPage/View/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/resetPassword/:id" component={ResetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/home" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={LandingPage} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
