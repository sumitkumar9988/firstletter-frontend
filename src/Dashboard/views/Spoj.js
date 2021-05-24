import React from 'react';
import data from './../../utils/spoj.json';
function Index() {
  return (
    <>
      <div className="min-h-screen">
        <div className="my-6 lg:my-12 container px-6 mx-auto flex  md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-50 ">SPOJ</h4>
          </div>
          <div className=" md:mt-0">
            <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Update
            </button>
          </div>
        </div>
        <div className="w-full mt-20  flex  justify-center">
          <div className=" sm:w-1/2 w-full  flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src="https://cdn.tuk.dev/assets/templates/olympus/profile.png" alt="profile" />
                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">
                  {data?.username}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className>
                <p className="text-1xs text-gray-300">Rank</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl  text-gray-50">{data?.rank}</p>
              </div>
              <div className="ml-12">
                <p className="text-1xs text-gray-300">points</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl  text-gray-50">$2890</p>
              </div>
              <div className="ml-12">
                <p className="text-1xs text-gray-300">Total Problem Solved</p>
                <p className="mt-2 text-base text-center sm:text-lg md:text-xl text-gray-50">{data?.solved.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
