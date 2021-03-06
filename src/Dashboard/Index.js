import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './views/HomePage'
import Card from './components/Card'
const Index = ({match}) => {
    return (
        <div>
           <Router>
                <Switch>
                  <Route exact path={`${match.path}/card`} component={Card} />
                  <Route exact path={`${match.path}/card`} component={Card} />
                  <Route exact path={`${match.path}/card`} component={Card} />
                  <Route exact path={`${match.path}/card`} component={Card} />
                  <Route exact path={`${match.path}/card`} component={Card} />
                  <Route exact path={match.path} component={HomePage} />
                </Switch>
             </Router>
        </div>
    )
}

export default Index
