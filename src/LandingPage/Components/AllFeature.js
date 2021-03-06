import React from "react";
import resumeIllustartor from "./../../Asset/Image/resume.svg";
import resume2Illustartor from "./../../Asset/Image/resume2.svg";

const AllFeature = () => {
  return (
    <div>
      <div className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div
          className="box-border flex flex-col items-center content-center 
                            px-8 mx-auto leading-6 text-black border-0 border-gray-300
                            border-solid md:flex-row max-w-7xl lg:px-16"
        >
          <div
            className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 
                            text-center bg-no-repeat bg-contain border-solid md:ml-0
                            md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
          >
            <img
              src={resumeIllustartor}
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>

          <div
            className="box-border order-first w-full text-black border-solid
                        md:w-1/2 md:pl-10 md:order-none"
          >
            <h2
              className="m-0 text-xl font-semibold leading-tight border-0
                           border-gray-300 lg:text-3xl md:text-2xl"
            >
              Better than resume
            </h2>
            <p
              className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300
                          sm:pr-12 xl:pr-32 lg:text-lg"
            >
              Show your programming skills and project in better way with your
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span
                  className="inline-flex items-center justify-center w-6 h-6 mr-2
                                      text-white bg-purple-500 rounded-full"
                >
                  <span className="text-sm font-bold">✓</span>
                </span>
                Github
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span
                  className="inline-flex items-center justify-center w-6 h-6 mr-2
                                     text-white bg-purple-500 rounded-full"
                >
                  <span className="text-sm font-bold">✓</span>
                </span>
                Codechef
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span
                  className="inline-flex items-center justify-center w-6
                                     h-6 mr-2 text-white bg-purple-500 rounded-full"
                >
                  <span className="text-sm font-bold">✓</span>
                </span>
                SPOJ
              </li>
            </ul>
          </div>
        </div>
        <div
          className="box-border flex flex-col  items-center content-center px-8 mx-auto mt-2 leading-6
                text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl
                lg:px-16"
        >
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Represent youself on Internet
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Mostly developer struggle with current solutions to represent
              online
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span
                  className="inline-flex items-center justify-center w-6
                                 h-6 mr-2 text-white bg-purple-500 rounded-full"
                >
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Show your experience
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span
                  className="inline-flex items-center justify-center w-6
                                 h-6 mr-2 text-white bg-purple-500 rounded-full"
                >
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Show your intrest and habbit
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span
                  className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white 
                                bg-purple-500 rounded-full"
                >
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Show All your certificate
              </li>
            </ul>
          </div>

          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src={resume2Illustartor}
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFeature;
