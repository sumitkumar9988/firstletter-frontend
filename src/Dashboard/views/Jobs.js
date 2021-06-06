import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import DeveloperImage from './../../Asset/developer.png';
function Index() {
  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className=" overflow-y-hidden">
      <div className="w-full bg-black sm:pt-16 sm:pb-32 pt-10 pb-10">
        <div className="container mx-auto">
          <div className="xl:flex lg:flex md:flex flex-wrap xl:justify-between lg:justify-around sm:w-full w-11/12 mx-auto sm:mx-0 xl:items-center">
            <div className="xl:w-1/2 lg:w-1/2 w-11/12 mx-auto xl:mx-0 lg:mx-0">
              <h1 className="xl:text-4xl text-2xl text-white sm:pb-5 pb-6 text-center sm:text-left">
                We will Keep You Updated
              </h1>
              <p className="text-base font-semibold text-white sm:pb-10 pb-16 text-center sm:text-left">
                We will notified your through your email and mobile number when ever their is intern or job match with
                your skills
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
