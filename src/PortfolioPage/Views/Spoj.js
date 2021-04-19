import React from 'react';
import data from './../../utils/spoj.json';
import Heaader from './../components/Header';

const Spoj = () => {
  return (
    <div className="bg-black">
      <Heaader/>
      <div className="ml-36 pt-8 mr-10">
        <div class="lg:flex lg:items-center  lg:justify-between">
          <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-50 sm:text-3xl sm:truncate">SPOJ Profile</h2>
            <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                {data.username}
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {data.points}
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  />
                </svg>
                {data.rank}
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                {data.join}
              </div>
            </div>
          </div>
        </div>

        <p className="pt-10">
          <p className="sans-serif pt-5 font-medium text-lg  text-blue-500 hover:text-blue-600 ">Solved Problem</p>
          <div className="flex flex-wrap -mx-2 pt-6 mb-8">
            {data.solved?(data.solved.map((item) => (
              <div className="w-1/2 md:w-1/4 lg:w-1/8 px-2 mb-4">
                <div className=" h-8 text-sm text-grey-dark flex items-center justify-center">
                  <p className="text-white font-medium pb-8 text-2xl">{item}</p>
                </div>
              </div>
            ))):null}
          </div>
          <p className="sans-serif pt-5 font-medium text-lg  text-blue-500 hover:text-blue-600 ">todo Problem</p>
          <div className="flex flex-wrap -mx-2 pt-6 pb-8">
           {data.todo?(data.todo.map((item) => (
              <div className="w-1/2 md:w-1/4 lg:w-1/8 px-2 mb-4">
                <div className=" h-8 text-sm text-grey-dark flex items-center justify-center">
                  <p className="text-2xl font-medium mb-9 text-white">{item}</p>
                </div>
              </div>
            ))):null} 
          </div>
        </p>
      </div>
    </div>
    
  );
};

export default Spoj;

// 4 grid tailwind

{
  /* <div className="flex flex-wrap -mx-2 mb-8">
<div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
  <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
    <p>full / half / quarter</p>
  </div>
</div>
<div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
  <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
    <p>full / half / quarter</p>
  </div>
</div>
<div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
  <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
    <p>full / half / quarter</p>
  </div>
</div>
<div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
  <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
    <p>full / half / quarter</p>
  </div>
</div>
</div> */
}
