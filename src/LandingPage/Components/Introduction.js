import React from 'react';

const Introduction = () => {
  return (
    <div>
      <div class="container py-32 mx-auto text-center ">
        <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-white">
          <span class="block">Nulla est consectetur no.</span>{' '}
          <span class="relative inline-block mt-3 text-transparent text-white">voluptate consectetur fugiat qui</span>
        </h1>
        <div class="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200">
          Anim mollit ipsum sint Lorem anim do aute esse excepteur cillum consectetur nulla do.Occaecat qui esse esse
          amet sit.
        </div>
        <div class="relative  items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
          <button
            type="text"
            name="email"
            placeholder="Email Address"
            class="bg-blue-500 width-64 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
