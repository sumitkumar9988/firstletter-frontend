import React from 'react';
import Hero from './View/Hero';
import Features from './View/Features';
import Footer from './Components/Footer';
import Newletter from './Components/Newletter.js';
import Cta from './Components/Cta';
import Client from './Components/Client';
export default () => {
  return (
    <div>
      <Hero />
      <Features />
      <Client />
      <Cta />
      <Newletter />
      <Footer />
    </div>
  );
};
