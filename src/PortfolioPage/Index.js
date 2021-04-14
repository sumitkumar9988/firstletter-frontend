import React from 'react';

//Components imports
import PortfolioHeader from './Views/Header';
import UserIntroduction from './Views/UserIntroduction';
import Project from './Views/Project';
import Education from './Views/Education';
import Contact from './Views/Contact';
import Footer from './Views/Footer';
import Skill from './Views/Skill';
const Index = () => {
  return (
    <div>
      <PortfolioHeader />
      <UserIntroduction />
      <Project />
      <Education />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
