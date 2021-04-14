import React from 'react';

const Nav = () => {
  return (
    <div>
      <div class="fixed flex top-0 left-0 z-40 items-center w-full h-full p-3 text-xl bg-gray-100 bg-opacity-50">
        <div class="flex-col w-full h-full overflow-hidden bg-black rounded-lg select-none">
          <div class="flex flex-col items-center justify-center w-full h-full mt-12 text-center ">
            <a class="inline-block px-4 py-2 mx-2 font-medium text-left text-blue-500 hover:text-indigo-200">Home</a>
            <a class="inline-block  px-4 py-2 mx-2 font-medium text-left text-blue-500 hover:text-indigo-200 ">About</a>

            <a class="inline-block  px-4 py-2 mx-2 font-medium text-left  text-blue-500 hover:text-indigo-200 ">
              Contact
            </a>

            <a class="inline-block px-4 mt-7 py-2 mx-2 font-medium text-left  text-red-500 hover:text-indigo-200 ">
              Login
            </a>

            <a class="inline-block  px-4 py-2 mx-2 font-medium text-left  text-red-500 hover:text-indigo-200 ">
              Signup
            </a>
          </div>
          )
        </div>
      </div>
    </div>
  );
};

export default Nav;
