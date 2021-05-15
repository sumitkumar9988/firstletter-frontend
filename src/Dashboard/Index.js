import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './views/Home'
import Profile from './views/Profile'
import Education from './views/Education';
import Experience from './views/Experience';
import Jobs from './views/Jobs';
import Project from './views/Project';
import Cp from './views/Cp';
import Certificate from './views/Certificate';
import AddCertificate from './views/AddCertificate';
import AddEducation from './views/AddEducation';
import AddExperience from './views/AddExperience';
import EditEducationDetails from './views/EditEducationDetails';
import EditExperienceDetails from './views/EditExperienceDetails';
import EducationFullDetails from './views/EducationFullDetails';
import ExperienceFullDetails from './views/ExperienceFullDetails';


const { useHistory } = 'react-router-dom';
const Index = () => {
  const history = useHistory;
  return (
    <div >
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/home/me" component={Profile} />
            <Route path="/home/education/edit/:id" component={EditEducationDetails} />
            <Route path="/home/education/new" component={AddEducation} />
            <Route path="/home/education/:id" component={EducationFullDetails} />
            <Route path="/home/education" component={Education} />
            <Route path="/home/experience/new" component={AddExperience} />
            <Route path="/home/experience/edit/:id" component={EditExperienceDetails} />
            <Route path="/home/experience/:id" component={ExperienceFullDetails} />
            <Route path="/home/experience" component={Experience} />
            <Route path="/home/jobs" component={Jobs} />
            <Route path="/home/projects" component={Project} />
            <Route path="/home/programming" component={Cp} />
            <Route path="/home/certificate/:id" component={AddCertificate} />
            <Route path="/home/certificate" component={Certificate} />
            <Route  path="/home" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default Index;
