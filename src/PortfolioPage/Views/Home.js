import React from 'react';
import PortfolioHeader from '../components/Header';
import UserIntroduction from '../components/UserIntroduction';
import Footer from '../components/Footer';
import Project from './../components/Project';
const Index = ({ history, loaction }) => {
  return (
    <div className="bg-black">
      <PortfolioHeader />
      <UserIntroduction />
      <Project />
      <Footer />
    </div>
  );
};

export default Index;
