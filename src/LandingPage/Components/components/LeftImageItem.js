import React from 'react';

const LeftImageItem = ({ image, title, description }) => {
  return (
    <div>
      <div class="flex flex-col  flex-col-reverse w-full bg-black md:flex-row">
        <div class="w-full overflow-hidden md:w-1/2">
          <img
            src={image}
            class=" hover:overflow-x-hidden  duration-500 ease-in-out transform hover:scale-110 inset-0 object-cover"
            alt="left image"
          />
        </div>
        <div class="flex flex-col items-start justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 class="max-w-lg text-4xl font-bold leading-tight text-blue-500 md:text-3xl lg:text-4xl">{title}</h2>
          <p class="mt-4 mb-10 text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftImageItem;
