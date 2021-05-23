import React from 'react';

function Index() {
  return (
    <>
      <div className="min-h-screen">
        <div className="w-full mt-20  flex  justify-center">
          <div className=" sm:w-1/2 w-full  flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src="https://cdn.tuk.dev/assets/templates/olympus/profile.png" alt="profile" />
                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">
                  Ricardo Boveta
                </p>
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className>
                <p className="text-xs text-gray-300">Products</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl  text-gray-50">28</p>
              </div>
              <div className="ml-12">
                <p className="text-xs text-gray-300">Revenue</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl  text-gray-50">$2890</p>
              </div>
              <div className="ml-12">
                <p className="text-xs text-gray-300">Average</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-50">$169</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
