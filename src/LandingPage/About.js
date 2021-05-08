import React from 'react';
import Feature from './Components/Feature';
import FAQ from './Components/Faq';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Newletter from './Components/Newletter';
const About = () => {
  return (
    <div className="bg-black">
      <Header />
      <Feature />
      <FAQ />
      <Newletter />
      <Footer />
    </div>
  );
};

export default About;
