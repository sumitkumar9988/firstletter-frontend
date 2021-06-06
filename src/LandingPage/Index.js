import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Hero from './View/Hero';
import Features from './View/Features';
import Footer from './Components/Footer';
import Newletter from './Components/Newletter.js';
import Client from './Components/Client';

export default () => {
  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
