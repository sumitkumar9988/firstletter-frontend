import React from 'react';
import LandingPage from './LandingPage/Index';
import PortfolioPage from './PortfolioPage/Index';
import Dashboard from './Dashboard/Index';
import Login from './authPage/Login';
import Register from './authPage/Register';
import EmailSent from './authPage/EmailSent';
import ChangePassword from './authPage/ChangePassword';
import ForgetPassword from './authPage/ForgetPassword';
import ResetPassword from './authPage/ResetPassword';
import FourOFour from './extraPage/FourOFour';
import Trail from './extraPage/Trail';
import ResumeUpload from './authPage/resumeUpload';
import ProfilePhoto from './authPage/ProfilePhoto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/trail" component={Trail} />
          <Route path="/sumit" component={PortfolioPage} />
          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/emailsent" component={EmailSent} />
          <Route path="/resume" component={ResumeUpload} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/photo" component={ProfilePhoto} />
          <Route path="/home" component={Dashboard} />
          <Route exact path="/" component={LandingPage} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
