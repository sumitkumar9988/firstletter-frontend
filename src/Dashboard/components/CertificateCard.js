import React from 'react';
export default function IndexPage() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden relative ">
        <img className="w-full" src="https://i.ibb.co/2q4Q5PL/girl-water-masked.png" alt srcSet />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="sm:flex items-start justify-between">
            <div className="flex items-center">
              <div className="ml-4 ">
                <p className="text-base font-semibold text-white">John Connor</p>
                <p className="text-sm text-white">45 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
