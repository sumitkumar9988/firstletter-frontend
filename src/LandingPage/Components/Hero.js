import React from "react";
import heroImage from "./../../Asset/Image/Hero.svg";

const Hero = () => {
  return (
    <div className="px-2 pt-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span className="block">
            Create Your Own{" "}
            <span className="block mt-1 text-purple-500 lg:inline lg:mt-0">
              Portfolio Pages
            </span>
          </span>
        </h1>
        <p className="w-full mx-auto text-base text-left text-gray-500  sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          share your work with both peers and potential employers
        </p>
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
          <a
            href="https://bwvljm87z3p.typeform.com/to/qg0JGsAq"
            className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto"
          >
            Become Early user
          </a>
          <a
            href="#feature"
            className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="container items-center mx-auto text-center mt-16 px-5 max-w-4xl">
        <img alt="" src={heroImage} className="" id="" />
      </div>
    </div>
  );
};

export default Hero;
