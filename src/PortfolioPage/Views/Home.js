import React from 'react';
import PortfolioHeader from '../components/Header';
import UserIntroduction from '../components/UserIntroduction';
import Footer from '../components/Footer';
import Project from './../components/Project';
const Index = ({ subdomain }) => {
  console.log(subdomain);
  return (
    <div className="bg-black">
      <PortfolioHeader subdomain={subdomain} />
      <UserIntroduction subdomain={subdomain} />
      <Project subdomain={subdomain} />
      <Footer subdomain={subdomain} />
    </div>
  );
};

export default Index;
