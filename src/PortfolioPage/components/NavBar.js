import React from 'react';

const NavBar = () => {
  return (
    <div className="">
      <div className="fixed flex top-0 left-0 z-40 items-center w-full h-full p-3 text-xl bg-gray-50 bg-opacity-50">
        <div className="flex-col w-full h-full overflow-hidden bg-black rounded-lg select-none">
          <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center ">
            <a className="inline-block px-4 py-2 mx-2 font-medium text-left text-blue-500 hover:text-indigo-200">
              Home
            </a>

            <a className="inline-block  px-4 py-2 mx-2 font-medium text-left  text-blue-500 hover:text-indigo-200 ">
              CodeChef
            </a>
            <a className="inline-block  px-4 py-2 mx-2 font-medium text-left  text-blue-500 hover:text-indigo-200 ">
              SPOJ
            </a>
            <a className="inline-block  px-4 py-2 mx-2 font-medium text-left  text-blue-500 hover:text-indigo-200 ">
              Codeforces
            </a>
            <a className="inline-block  px-4 py-2 mx-2 font-medium text-left text-blue-500 hover:text-indigo-200 ">
              About
            </a>
          </div>
          )
        </div>
      </div>
    </div>
  );
};

export default NavBar;
