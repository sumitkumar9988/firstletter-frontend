import React from 'react';

const Header = () => {
  return (
    <>
      <header class="relative w-full px-8 text-gray-700 bg-white body-font">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <a
            href="#_"
            class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
          >
            Sumit
          </a>

          <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
            >
              <span class="block">Home</span>
            </a>
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span class="block">Project</span>
            </a>
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span class="block">Skills</span>
            </a>
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span class="block">Contacts</span>
            </a>
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span class="block">Blog</span>
            </a>
          </nav>

          <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
            <span class="inline-flex rounded-md shadow-sm">
              <a class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-purple-500 border bg-purple-600 rounded-md shadow-sm hover:bg-purple-700 ">
                Contact
              </a>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
