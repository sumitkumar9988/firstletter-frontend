import React from 'react';
import FourOFourImg from './../Asset/Image/404.svg';

const FourOFour = () => {
  return (
    <div>
      <section class="py-8 px-4 bg-gray-900 h-screen text-center">
        <h2 class="text-5xl text-gray-50 font-semibold font-heading">Error 404</h2>
        <p class="text-gray-100">Page not found</p>
        <img class="max-w-auto md:max-w-sm my-14 mx-auto" src={FourOFourImg} alt="404" />
      </section>
    </div>
  );
};

export default FourOFour;
