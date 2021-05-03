import React from 'react';
import Hero from './View/Hero';
import Features from './View/Features';
import Footer from './Components/Footer';
import Client from './Components/Client';
export default () => {
  return (
    <div>
      <Hero />
      <Features />
      <Client
        image="https://images.unsplash.com/photo-1559726950-9bae0f643f86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        description="Excepteur irure nostrud magna eu commodo commodo Lorem ullamco cillum ex nulla cupidatat.Ullamco enim quis occaecat commodo consectetur enim proident nulla do laborum amet aliqua labore.Ad ipsum quis ipsum commodo esse."
      />
      <Footer />
    </div>
  );
};
