import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="">
      <div className="fixed flex top-0 left-0 z-40 items-center w-full h-full p-3 text-xl bg-gray-50 bg-opacity-50">
        <div className="flex-col w-full h-full overflow-hidden bg-black rounded-lg select-none">
          <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center ">
            <Link to="/">
              <a className="inline-block px-4 py-4 mx-2 text-3xl font-bold text-left text-blue-500 hover:text-indigo-200">
                Home
              </a>
            </Link>

            <Link to="/about">
              <a className="inline-block  px-4 py-4 mx-2 text-3xl font-bold  text-left text-blue-500 hover:text-indigo-200 ">
                About
              </a>
            </Link>
          </div>
          )
        </div>
      </div>
    </div>
  );
};

export default NavBar;
