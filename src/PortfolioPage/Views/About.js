import React from 'react';
import PortfolioHeader from '../components/Header';
import UserIntroduction from '../components/UserIntroduction';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const About = () => {
  return (
    <div className="bg-black">
      <PortfolioHeader />
      <UserIntroduction />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
