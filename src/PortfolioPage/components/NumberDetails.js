import React from 'react';

const NumberDetails = () => {
  return (
    <div>
      <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
          1
        </div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
            <img
              src="https://lh3.googleusercontent.com/proxy/srY4OiUQ62qkwdtWC9AjxpDnflAwR7RK2_8pHkexTTFc-J6jGNOrKuQ45kY2jAVinPTB5LB-Sc034sI6cB2NBm8"
              alt="logo"
            />
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-50 mb-1 text-xl">IIT Delhi</h2>
            <p class="leading-relaxed text-xs text-green-500">2018-2022</p>
            <span class="text-xm text-red-400">B.tech</span>
            <p class="leading-relaxed">
              Complete my B.tech from IIT Delhi in computer science and learn multiple programming language
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberDetails;
