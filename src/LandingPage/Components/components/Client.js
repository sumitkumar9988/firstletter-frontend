import React from 'react';

const Client = ({ image, description }) => {
  return (
    <div>
      <div class="flex min-h-screen">
        <section class="grid grid-cols-3 text-gray-200 bg-black sm:grid-cols-2">
          <div class="z-10 h-full col-span-2 sm:col-span-1 place-self-end">
            <div class="flex items-center w-full h-full">
              <div class="max-w-xs p-4 text-sm text-right sm:max-w-xl sm:p-10 sm:text-base lg:max-w-2xl">
                <h1 class="mb-10 -mr-12 text-2xl font-bold leading-tight text-blue-500 sm:-mr-20 sm:text-3xl md:text-4xl lg:text-5xl">
                  Get hired quickly by
                  <br />
                  firstletter.
                </h1>
                <p class="mb-10 lg:pl-32 text-white">{description}</p>
                <a
                  href="#"
                  class="px-1 pb-1 text-white font-semibold uppercase transition-colors duration-500 border-b-4 border-gray-50 text-md hover:border-blue-500 hover:text-blue-500"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden min-h-full">
            <img
              class="hover:overflow-hidden  duration-500 hover:animate-pulse transform scale-110 hover:scale-100 object-cover w-full h-full"
              src={image}
              alt="Client"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Client;
