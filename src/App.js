import React from "react";
import LandingPage from "./LandingPage/Index";
import PortfolioPage from "./PortfolioPage/Index";
import Dashboard from './Dashboard/Index'
import Login from './authPage/Login'
import FourOFour from './extraPage/FourOFour'
import "./styles/index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/user" component={PortfolioPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/basic" component={form}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/" component={LandingPage} />
          <Route  component={FourOFour}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
