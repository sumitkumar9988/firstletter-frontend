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
import ProfilePhoto from './authPage/ProfilePhoto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // let url = window.location.href;
  // let url = 'https://www.firstletter.tech/';
  // url = url.replace('https://', '');
  // url = url.replace(':3000/', '');
  // url = url.replace('/', '');

  // console.log(url);
  // const { subDomains, domain, topLevelDomains } = parseDomain(url);

  // console.log(subDomains); // []
  // console.log(domain); // "parse-domain"
  // console.log(topLevelDomains);
  // console.log(window.location.host);

  // const url = 'https://www.instagram.com/';
  // const parsedData = url.split('.');

  // if (parsedData.length >= 3) {
  //   const subDomain = parsedData[0];
  //   console.log(subDomain);
  // } else {
  //   console.log('fuckof');
  // }

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/trail" component={Trail} />
          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/emailsent" component={EmailSent} />
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
