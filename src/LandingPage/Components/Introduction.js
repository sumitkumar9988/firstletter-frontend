import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <div>
      <div className="container py-32 mx-auto text-center ">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white">
          <span className="block text-blue-400 text-6xl">Firstletter</span>{' '}
          {/* <span className="relative inline-block mt-3 text-transparent text-white">voluptate consectetur fugiat qui</span> */}
        </h1>
        <div className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-50 font-medium text-xl">
          Build Your Portfolio show your skills to your peers and employer and apply to your dream jobs quickly
        </div>
        <div className="relative  items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
          <Link to="/register">
            <button
              type="text"
              name="email"
              placeholder="Email Address"
              className="bg-blue-500 width-64 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
