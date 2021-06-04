import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Illustration } from './../../Asset/cp-il.svg';
import { ReactComponent as Illustration2 } from './../../Asset/cp-il2.svg';

const Cp = () => {
  return (
    <div className="min-h-screen  bg-black">
      <div className="container relative max-w-2xl px-5 pt-12 mx-auto sm:py-12 lg:px-0">
        <h2 className="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
          Top <span className="inline-block text-pink-400">Platform</span>
        </h2>
      </div>
      <div class=" overflow-hidden  h-full p-auto ">
        <div class="flex flex-col items-center justify-center w-full h-full mt-8 text-center">
          <Link to="/home/programming/codechef">
            <p class="inline-block px-4 py-2 mx-2 text-2xl text-left font-semibold text-pink-500 hover:text-indigo-200">
              CodeChef
            </p>
          </Link>
          <Link to="/home/programming/spoj">
            <p class="inline-block  px-4 py-2 mx-2 text-2xl text-left font-semibold text-pink-500 hover:text-indigo-200 ">
              SPOJ
            </p>
          </Link>
          <Link to="/home/programming/codeforces">
            <p class="inline-block  px-4 py-2 mx-2 text-2xl text-left font-semibold text-pink-500 hover:text-indigo-200 ">
              CodeForces
            </p>
          </Link>
        </div>
      </div>
      <div className="absolute mx-auto bottem-0 right-0 transform mr-6 z-0 opacity-40">
        <Illustration />
      </div>
      <div className="relative mx-auto bottem-0 z-0 opacity-40 h-48">
        <Illustration2 />
      </div>
    </div>
  );
};

export default Cp;
