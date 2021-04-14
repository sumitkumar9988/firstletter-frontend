import React, { useState } from 'react';

const Loader = () => {
  const [open,  setOpen]  =  useState(false);

  const toggle = (e) => {
    e.preventDefault();
    open?setOpen(false):setOpen(true)
  };

  return (
    <div>
     



      <div class="flex flex-col w-full bg-black md:flex-row">
        <div class="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 class="max-w-lg text-4xl font-bold leading-tight text-blue-500 md:text-3xl lg:text-4xl">
            Your Future Depends on What You Do Today
          </h2>
          <p class="mt-4 mb-10 text-white">
           Aliqua sit elit aliqua consectetur voluptate.
          </p>
        </div>
        <div class=" w-full overflow-hidden md:w-1/2  ">
          <img
            src="https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            class="hover:overflow-x-hidden  duration-500 ease-in-out transform hover:scale-110 inset-0 object-cover "
          />
        </div>
      </div>

      <div class="flex flex-col  -reverse w-full bg-black md:flex-row">
        <div class="w-full overflow-hidden md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1538691929598-f3c649a7b92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            class=" hover:overflow-x-hidden  duration-500 ease-in-out transform hover:scale-110 inset-0 object-cover"
          />
        </div>
        <div class="flex flex-col items-start justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 class="max-w-lg text-4xl font-bold leading-tight text-blue-500 md:text-3xl lg:text-4xl">
            Find Your Passion
            <br />
            Find Your Happiness
          </h2>
          <p class="mt-4 mb-10 text-white">
            Find your true passion and live the life you've always dreamed.
          </p>
        </div>
      </div>

      <div class="flex flex-col w-full bg-black md:flex-row">
        <div class="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 class="max-w-lg text-4xl font-bold leading-tight text-blue-500 md:text-3xl lg:text-4xl">
            Your Future Depends on What You Do Today
          </h2>
          <p class="mt-4 mb-10 text-white">
           Labore aliqua ea veniam adipisicing non elit veniam commodo do nulla.
          </p>
        </div>
        <div class="w-full overflow-hidden md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            class="hover:overflow-x-hidden  duration-500 ease-in-out transform hover:scale-110 inset-0 object-cover"
          />
        </div>
      </div>

      <div class="flex  flex-col-reverse w-full bg-black md:flex-row">
        <div class="overflow-hidden w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1538691929598-f3c649a7b92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            class="hover:overflow-x-hidden  duration-500 ease-in-out transform hover:scale-110 inset-0 object-cover"
          />
        </div>
        <div class="flex flex-col items-start justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 class="max-w-lg text-4xl font-bold leading-tight text-blue-500 md:text-3xl lg:text-4xl">
            Find Your Passion
          </h2>
          <p class="mt-5 mb-10 text-white">
            Occaecat magna qui ullamco proident ad Lorem occaecat fugiat adipisicing deserunt.
          </p>
        </div>
</div>























    </div>
  );
};

export default Loader;
