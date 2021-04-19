import React from 'react';
import PortfolioHeader from '../components/Header';
import UserIntroduction from '../components/UserIntroduction';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';

const About = () => {
  return (
    <div className="bg-black">
      <PortfolioHeader />
      <UserIntroduction />
      <Education />
      <Experience />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
