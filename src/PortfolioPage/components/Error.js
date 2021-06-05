import React from 'react';

const Error = ({ error }) => {
  return (
    <div>
      <section class="py-8 px-4 bg-gray-900 h-screen text-center">
        <img
          class="max-w-auto md:max-w-sm my-14 mx-auto"
          src="https://res.cloudinary.com/sumit9988/image/upload/v1622932183/surr-page-not-found_bkopf4.png"
          alt="404"
        />
        <h2 class="text-5xl text-pink-500 font-bold font-heading">{error.message}</h2>
      </section>
    </div>
  );
};

export default Error;
