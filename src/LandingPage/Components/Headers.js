import React from "react";
import {Link} from 'react-router-dom'


const Headers = () => {
  return (
    <>
      <header className="relative w-full px-8 text-gray-700 bg-white body-font">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <p
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
          >
            Firstletter
          </p>

          {/* <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"  >
                <span className="block">Home</span>
            </a>
            <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" >
                <span className="block">Features</span>
            </a>
            <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" >
                <span className="block">Pricing</span>
            </a>
            <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" >
                <span className="block">Blog</span>
            </a>
        </nav> */}

          <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
           <Link to="/login">
              <p  className="inline-flex items-center justify-center px-4
                  py-2 text-base font-medium leading-6 text-gray-600
                  whitespace-no-wrap bg-white border border-gray-200
                  rounded-md shadow-sm hover:bg-gray-50 ">
                   Sign in
               </p>
           </Link>
            <span className="inline-flex rounded-md shadow-sm">
              <Link to="/register">
              <p  className="inline-flex items-center justify-center
                    px-4 py-2 text-base font-medium leading-6
                  text-white whitespace-no-wrap  
                    border bg-purple-600 rounded-md
                    shadow-sm hover:bg-purple-700 ">
                    Sign up
                </p>
              </Link>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headers;
