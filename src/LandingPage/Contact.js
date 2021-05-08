import React from 'react';
import ContactSection from './Components/ContactSection';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Newletter from './Components/Newletter';
const Contact = () => {
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
