import React from 'react';

const demo2 = () => {
  return (
    <div className="bg-black">
      <div class="fixed top-0 left-0 z-40  items-center hidden w-full h-full p-3 text-xl bg-gray-900 ">
        <div class="flex-col w-full h-auto h-full overflow-hidden bg-black rounded-lg select-none      ">
          <div class="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700     ">
            <a href="#" class="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700    ">
              Home
            </a>
            <a
              href="#"
              class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left  hover:text-indigo-800 :text-white  "
            >
              Features
            </a>
            <a
              href="#"
              class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left  hover:text-indigo-800 :text-white  "
            >
              Blog
            </a>
            <a
              href="#"
              class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left  hover:text-indigo-800 :text-white  "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default demo2;
