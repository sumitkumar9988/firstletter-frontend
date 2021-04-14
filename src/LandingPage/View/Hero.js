import React from 'react';
import Header from './../Components/components/Header';
import Introduction from './../Components/components/Introduction';

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
