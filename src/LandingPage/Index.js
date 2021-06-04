import React from 'react';
import Hero from './View/Hero';
import Features from './View/Features';
import Footer from './Components/Footer';
import Newletter from './Components/Newletter.js';
import Client from './Components/Client';
export default () => {
  return (
    <div className="bg-black">
      <Hero />
      <Features />
      <Client />
      <Newletter />
      <Footer />
    </div>
  );
};
