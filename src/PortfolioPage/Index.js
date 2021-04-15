import React from 'react';

//Components imports
import PortfolioHeader from './components/Header';
import UserIntroduction from './components/UserIntroduction';
// import Project from './Views/Project';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer'

import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Skill from './Views/Skill';


const Index = (props) => {
  console.log('in porftlio page subdomain');
  console.log(props.subDomain);
  return (
    <div className="bg-black">
      <PortfolioHeader />
      <UserIntroduction />
      <Education />
      <Experience    />
      <Contact />

      <Footer/>
      {/* <Project />
      <Skill />
      <Footer /> */}
    </div>
  );
};

export default Index;
