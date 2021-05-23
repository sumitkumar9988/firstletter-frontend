import React from 'react';
import DeveloperImage from './../../Asset/developer.png';
function Index() {
  return (
    <div className=" overflow-y-hidden">
      <div className="w-full bg-black sm:pt-16 sm:pb-32 pt-10 pb-10">
        <div className="container mx-auto">
          <div className="xl:flex lg:flex md:flex flex-wrap xl:justify-between lg:justify-around sm:w-full w-11/12 mx-auto sm:mx-0 xl:items-center">
            <div className="xl:w-1/2 lg:w-1/2 w-11/12 mx-auto xl:mx-0 lg:mx-0">
              <h1 className="xl:text-5xl text-3xl text-white sm:pb-5 pb-6 text-center sm:text-left">
                Sign Up for Product Updates and News
              </h1>
              <p className="text-xl text-white sm:pb-10 pb-16 text-center sm:text-left">
                You can subscribe to our newsletter to get to know about our latest products and exciting offers.
              </p>
            </div>
            <div className="xl:w-5/12 lg:w-5/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 lg:pt-0 pt-6">
              <div className="flex items-end justify-center h-full">
                <img src={DeveloperImage} alt className="mt-10 sm:mt-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
