import React from "react";
import LandingPage from "./LandingPage/Index";
import PortfolioPage from "./PortfolioPage/Index";
import Dashboard from './Dashboard/Index'
import Login from './authPage/Login'
import Register from './authPage/Register'
import BasicInfo from './authPage/BasicInfo'
import FourOFour from './extraPage/FourOFour'
import ProfilePhoto from './authPage/ProfilePhoto'
import "./styles/index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/sumit" component={PortfolioPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/basic" component={BasicInfo}/>
          <Route path="/photo" component={ProfilePhoto}/>
          <Route path="/home" component={Dashboard}/>
          <Route exact path="/" component={LandingPage} />
          <Route  component={FourOFour}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
