import React from 'react';
import data from './../../utils/codechef.json';
function Index() {
  return (
    <>
      <div className="w-full bg-black  py-10">
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-50 ">CodeChef</h4>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Update
            </button>
          </div>
        </div>
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/2 px-12 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png"
                    alt="avatar"
                  />
                </div>
                <h2 className="text-gray-800  text-xl tracking-normal font-medium mb-1">{data?.user_details.name}</h2>
                <p className="flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  {data?.user_details.username}
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  {data?.user_details.institution}
                </p>
                <div className="flex items-start">
                  <div className>
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      {data?.highest_rating}
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Highest Rank</p>
                  </div>
                  <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      {data?.global_rank}
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Global Rank</p>
                  </div>
                  <div className>
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      {data?.country_rank}
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Country Rank</p>
                  </div>
                </div>
              </div>

              {data?.contests.map((item) => {
                return (
                  <div className="w-full lg:w-1/2 flex-col flex justify-center items-center px-12 py-8">
                    <h2 className="text-center text-1xl text-red-500 dark:text-gray-100 font-medium mt-2 mb-4 tracking-normal">
                      {item.name}
                    </h2>
                    <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                      {item.rating}
                    </h2>
                    <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                      Rating
                    </h2>
                    <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                      {item.global_rank}
                    </h2>
                    <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                      Global Rank
                    </h2>
                    <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                      {item.country_rank}
                    </h2>
                    <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                      Country rank
                    </h2>
                  </div>
                );
              })}
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
