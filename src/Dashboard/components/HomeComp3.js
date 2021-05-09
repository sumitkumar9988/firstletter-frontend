import React from 'react';
export default function IndexPage() {
  return (
    <>
      <div className="pt-16 pb-32">
        <div className="w-full mx-auto container 2xl:px-0 xl:px-4 px-8">
          <div className="flex items-center justify-between">
            <div className="md:w-2/5 w-1/3 relative z-0 pr-4">
              <hr className />
            </div>
            <div className="text-center w-28">
              <p className="text-gray-900 text-center relative z-20 text-base flex-shrink-0 flex font-light bg-white">
                Featured Work
              </p>
            </div>
            <div className="md:w-2/5 w-1/3 pl-4">
              <hr />
            </div>
          </div>
          <div className="md:mt-48 mt-40">
            <div className="flex md:flex-row flex-col flex-wrap items-center xl:justify-between justify-center">
              <div className=" px-2 sm:flex sm:items-center sm:justify-center md:mt-0 mt-16 xl:w-1/3 sm:w-1/2">
                <div className="bg-indigo-700 flex px-5 items-center justify-center relative xl:w-full h-full pb-32">
                  <img
                    className="w-full object-cover object-center -mt-32"
                    src="https://cdn.tuk.dev/assets/templates/reels/building-1.png"
                  />
                  <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                    <hr className="w-16 border-2 bg-white border-white" />
                    <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
                  </div>
                </div>
              </div>
              <div className="px-2 sm:flex sm:items-center sm:justify-center md:mt-0 mt-48 xl:w-1/3 sm:w-1/2 xl:-mb-48">
                <div className="bg-indigo-700 flex px-5 items-center justify-center relative xl:w-full  h-full pb-32">
                  <img
                    className="w-full object-cover object-center -mt-32"
                    src="https://cdn.tuk.dev/assets/templates/reels/building-2.png"
                  />
                  <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                    <hr className="w-16 border-2 bg-white border-white" />
                    <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
                  </div>
                </div>
              </div>
              <div className="px-2 sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 mt-48 xl:w-1/3 sm:w-1/2">
                <div className="bg-indigo-700 flex px-5 items-center justify-center relative  h-full pb-32">
                  <img
                    className="w-full object-cover object-center -mt-32"
                    src="https://cdn.tuk.dev/assets/templates/reels/building-3.png"
                  />
                  <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                    <hr className="w-16 border-2 bg-white border-white" />
                    <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-48 ">
              <div className="flex md:flex-row flex-col flex-wrap items-center xl:justify-between justify-center">
                <div className=" px-2 sm:flex sm:items-center sm:justify-center md:mt-0 mt-16 xl:w-1/3 sm:w-1/2">
                  <div className="bg-indigo-700 flex px-5 items-center justify-center relative xl:w-full h-full pb-32">
                    <img
                      className="w-full object-cover object-center -mt-32"
                      src="https://cdn.tuk.dev/assets/templates/reels/building-4.png"
                    />
                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                      <hr className="w-16 border-2 bg-white border-white" />
                      <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
                    </div>
                  </div>
                </div>
                <div className="px-2 sm:flex sm:items-center sm:justify-center md:mt-0 mt-48 xl:w-1/3 sm:w-1/2 xl:-mb-48">
                  <div className="bg-indigo-700 flex px-5 items-center justify-center relative xl:w-full  h-full pb-32">
                    <img
                      className="w-full object-cover object-center -mt-32"
                      src="https://cdn.tuk.dev/assets/templates/reels/building-5.png"
                    />
                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                      <hr className="w-16 border-2 bg-white border-white" />
                      <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
                    </div>
                  </div>
                </div>
                <div className="px-2 sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 mt-48 xl:w-1/3 sm:w-1/2">
                  <div className="bg-indigo-700 flex px-5 items-center justify-center relative  h-full pb-32">
                    <img
                      className="w-full object-cover object-center -mt-32"
                      src="https://cdn.tuk.dev/assets/templates/reels/building-6.png"
                    />
                    <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                      <hr className="w-16 border-2 bg-white border-white" />
                      <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
