import React from 'react';
import LandingPage from './LandingPage/Index';
import Dashboard from './Dashboard/Index';
import Login from './authPage/Login';
import Register from './authPage/Register';
import EmailSent from './authPage/EmailSent';
import ChangePassword from './authPage/ChangePassword';
import ForgetPassword from './authPage/ForgetPassword';
import ResetPassword from './authPage/ResetPassword';
import FourOFour from './extraPage/FourOFour';
import Trail from './extraPage/Trail';
import Trail2 from './extraPage/demo2';
import About from './LandingPage/About';
import Contact from './LandingPage/Contact';
import ProfilePhoto from './authPage/ProfilePhoto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black">
      <Router>
        <Switch>
          <Route path="/trail" component={Trail} />
          <Route path="/trail2" component={Trail2} />

          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/resetPassword/:id" component={ResetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/emailsent" component={EmailSent} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/photo" component={ProfilePhoto} />
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
