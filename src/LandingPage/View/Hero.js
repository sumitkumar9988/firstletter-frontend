import React from 'react';
import Header from './../Components/Header';
import Introduction from './../Components/Introduction';

const Hero = () => {
  return (
    <div>
      <section class="w-full px-3 antialiased bg-black ">
        <Header />
        <Introduction />
      </section>
    </div>
  );
};

export default Hero;
