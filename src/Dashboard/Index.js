import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home'
import Card from './components/Card'
import Project from './views/Project'
import Education from './views/Education'
import Experience from './views/Experience'
import NavBar from './components/NavBar'
const Index = ({match}) => {
    return (
        <div>
           <Router>
              <NavBar/>
                <Switch>
                  
                  <Route exact path={match.path} component={Home} />
                  <Route path={`${match.path}/project`} component={Project} />
                  <Route path={`${match.path}/education`} component={Education} />
                  <Route path={`${match.path}/experience`} component={Experience} />

                </Switch>
             </Router>
        </div>
    )
}

export default Index
