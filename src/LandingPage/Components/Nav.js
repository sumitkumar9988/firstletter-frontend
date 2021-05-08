import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <div class="fixed flex top-0 left-0 z-40 items-center w-full h-full p-3 text-xl bg-gray-100 bg-opacity-50">
        <div class="flex-col w-full h-full overflow-hidden bg-black rounded-lg select-none">
          <div class="flex flex-col items-center justify-center w-full h-full mt-12 text-center ">
            <Link to="/">
              <p class="inline-block px-4 py-2 mx-2 font-medium text-left text-blue-500 hover:text-indigo-200">Home</p>
            </Link>
            <Link to="/about">
              <p class="inline-block  px-4 py-2 mx-2 font-medium text-left text-blue-500 hover:text-indigo-200 ">
                About
              </p>
            </Link>
            <Link to="/contact">
              <p class="inline-block  px-4 py-2 mx-2 font-medium text-left  text-blue-500 hover:text-indigo-200 ">
                Contact
              </p>
            </Link>
            <Link to="/login">
              <p class="inline-block px-4 mt-7 py-2 mx-2 font-medium text-left  text-red-500 hover:text-indigo-200 ">
                Login
              </p>
            </Link>
            <Link to="/register">
              <p class="inline-block  px-4 py-2 mx-2 font-medium text-left  text-red-500 hover:text-indigo-200 ">
                Signup
              </p>
            </Link>
          </div>
          )
        </div>
      </div>
    </div>
  );
};

export default Nav;
