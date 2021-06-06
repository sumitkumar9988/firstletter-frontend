import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ContactSection from '../Components/ContactSection';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Newletter from '../Components/Newletter';
const Contact = () => {
  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <ContactSection />
      <Newletter />
      <Footer />
    </div>
  );
};

export default Contact;
