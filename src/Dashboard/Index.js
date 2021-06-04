import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Education from './views/Education';
import Experience from './views/Experience';
import Jobs from './views/Jobs';
import Project from './views/Project';
import Cp from './views/Cp';
import Codechef from './views/Codechef';
import Spoj from './views/Spoj';
import CodeForces from './views/Codeforces';
import Certificate from './views/Certificate';
import AddCertificate from './views/AddCertificate';
import AddEducation from './views/AddEducation';
import AddExperience from './views/AddExperience';
import EditEducationDetails from './views/EditEducationDetails';
import EditExperienceDetails from './views/EditExperienceDetails';
// import EducationFullDetails from './views/EducationFullDetails';
// import ExperienceFullDetails from './views/ExperienceFullDetails';
import Basic from './views/Profile/Basic';
import SocialLink from './views/Profile/MoreDetails';
import Github from './views/Github';

const { useHistory } = 'react-router-dom';
const Index = () => {
  const history = useHistory;
  return (
    <div>
      <Router history={history}>
        <Layout>
          <Switch>
            {/* <Route path="/home/me/link/cp" component={CpLink} /> */}
            <Route path="/home/me/basic" component={Basic} />
            <Route path="/home/me/link" component={SocialLink} />
            <Route path="/home/me" component={Profile} />
            <Route path="/home/education/edit/:id" component={EditEducationDetails} />
            <Route path="/home/education/new" component={AddEducation} />
            {/* <Route path="/home/education/:id" component={EducationFullDetails} /> */}
            <Route path="/home/education" component={Education} />
            <Route path="/home/experience/new" component={AddExperience} />
            <Route path="/home/experience/edit/:id" component={EditExperienceDetails} />
            {/* <Route path="/home/experience/:id" component={ExperienceFullDetails} /> */}
            <Route path="/home/experience" component={Experience} />
            <Route path="/home/jobs" component={Jobs} />
            <Route path="/home/projects/github" component={Github} />
            <Route path="/home/projects" component={Project} />
            <Route path="/home/programming/codechef" component={Codechef} />
            <Route path="/home/programming/spoj" component={Spoj} />
            <Route path="/home/programming/codeforces" component={CodeForces} />
            <Route path="/home/programming" component={Cp} />
            <Route path="/home/certificate/new" component={AddCertificate} />
            <Route path="/home/certificate" component={Certificate} />
            <Route path="/home" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default Index;
