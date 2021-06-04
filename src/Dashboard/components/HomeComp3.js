import React from 'react';
import { Link } from 'react-router-dom';
export default function IndexPage() {
  return (
    <>
      <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
        <div className="py-5 px-10 border-b border-gray-200 ">
          <p className="font-bold text-lg text-center text-gray-800 dark:text-gray-100">Add your Account</p>
        </div>
        <div className="py-10 px-6 flex flex-wrap justify-between">
          <div className="xl:w-1/4 sm:w-2/5 w-full mb-12 cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="mb-3 h-20 w-20">
                <img
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1622406272/25231_c7rvx4.png"
                  alt
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Github</p>
            </div>
          </div>
          <div className="xl:w-1/4 sm:w-2/5 w-full mb-12 cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="mb-3 h-20 w-20">
                <img
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1622406222/811b20a47eac52b10c90ab82e0628e21_cswov0.png"
                  alt
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Codechef</p>
            </div>
          </div>
          <div className="xl:w-1/4 sm:w-2/5 w-full mb-12 cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="mb-3 h-20 w-20">
                <img
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1622406131/download_cyf4bc.jpg"
                  alt
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">SPOJ</p>
            </div>
          </div>
          <div className="xl:w-1/4 sm:w-2/5 w-full mb-12 cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="mb-3 h-20 w-20">
                <img
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1622406032/dataset-card_ejfwpo.png"
                  alt
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Codeforces</p>
            </div>
          </div>
        </div>
      </div>
      // npm i react-helmet
      <div className="grid mt-32 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:pb-10">
        <Link to="/home/education">
          <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg mt-10 xl:-mt-20">
            <h1 className="text-3xl font-bold w-1/2">Add Education</h1>
            <div className="flex justify-end w-full items-end"></div>
          </div>
        </Link>
        <Link to="/home/experience">
          <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
            <h1 className="text-3xl font-bold w-1/2">Add Experience</h1>
            <div className="flex justify-end w-full items-end"></div>
          </div>
        </Link>
        <Link to="/home/certificate">
          <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
            <h1 className="text-3xl font-bold w-10/12">Add Certificate</h1>
            <div className="flex justify-end w-full items-end"></div>
          </div>
        </Link>
        <Link to="/home/me">
          <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
            <h1 className="text-3xl font-bold w-9/12">Edit Profile</h1>
            <div className="flex justify-end w-full items-end"></div>
          </div>
        </Link>
      </div>
    </>
  );
}
