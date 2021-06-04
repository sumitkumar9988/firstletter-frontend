import React from 'react';

const Loader = () => {
  return (
    <div>
      <div class="w-full h-full fixed block top-0 left-0 bg-gray-900 bg-opacity-100 z-50">
        <div class="text-blue-500 flex h-screen justify-center items-center ">
          <i class="fas fa-circle-notch fa-spin fa-5x "></i>
        </div>
      </div>
    </div>
  );
};

export default Loader;
